import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumeFormatModel } from '../../models/resume-format.model';
import { FirebaseDatabaseService } from '../../services/firebase-database.service';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import * as moment from 'moment';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})


export class EditorComponent implements OnInit, OnDestroy {

  constructor(public ds: FirebaseDatabaseService, public snackBar: MatSnackBar, public router: Router, public as: FirebaseAuthService) { }
  autoFill = false;
  currentWork: Array<boolean> = [false, false, false, false];
  workStartDates: Array<Date>;
  workEndDates: Array<Date>;

  minDate = new Date(2000, 0, 1);
  loading = true;

  currentSnackBar;
  resume: ResumeFormatModel;

  ngOnDestroy() {
    if (this.currentSnackBar) {
      this.currentSnackBar.dismiss();
    }
  }
  ngOnInit() {
    // const now = moment(); // add this 2 of 4
    // console.log('hello world', now.format()); // add this 3 of 4
    // console.log(now.add(7, 'days').format()); // add this 4of 4\

    this.ds.resumeSub.subscribe(data => {
      if (data) {
        this.resume = data[0];
        this.loading = false;
        if (!this.ds.isSavingResume()) {
          this.currentSnackBar = this.snackBar.open('Resume has not been saved.', 'Sign In', {
            duration: 0,
            horizontalPosition: 'right'
          });
          this.currentSnackBar.onAction().subscribe(() => {
            this.router.navigateByUrl('/login');
          });
        }
      }
    });
  }

  deleteConfirmation() {
    return new Promise((reject, resolve) => {
      if (!this.as.user) { // If there is no user signed in
        resolve(); // Confirm delete
      }
      this.currentSnackBar = this.snackBar.open('Are you sure you want to delete this entry?', 'Delete', {
        duration: 5000,
        // horizontalPosition: 'right'
      });
      this.currentSnackBar.onAction().subscribe((data) => {
        reject();
      });
      this.currentSnackBar.afterDismissed().subscribe(() => {
        resolve();
      });
    });
  }

  // Working on general function for every resume component
  removeResumeComponent(parent, index, warn) {
    if (warn) {
      this.deleteConfirmation().then(() => {
        this.removeComponent(parent, index);
      }).catch(() => { return; });
    } else {
      this.removeComponent(parent, index);
    }


  }

  private removeComponent(component, index) {
    if (component.length > 1) {
      component.splice(index, 1);
      this.update();
    } else {
      this.currentSnackBar = this.snackBar.open('There must be at least one entry.', 'Dismiss');
    }
  }

  // Function to add element to component universally
  // addResumeComponent(parent) {
  //   const copy = Object.assign({}, parent[0]);
  //   for(let i = 0; i < Object.keys(copy).length; i++) {

  //   }
  //   this.resume.work.push(copy);
  //   this.update();
  // }

  addWork() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.work[0]);
    this.resume.work.push(copy);
    this.update();
  }


  addHighlight(workIndex: number) {
    this.resume.work[workIndex].highlights.push('');
    this.update();
  }

  addVolunteer() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.volunteer[0]);
    this.resume.volunteer.push(copy);
    this.update();
  }

  addVolunteerHighlight(volunteerIndex: number) {
    this.resume.volunteer[volunteerIndex].highlights.push('');
    this.update();
  }

  addEducation() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.education[0]);
    this.resume.education.push(copy);
    this.update();
  }

  addCourse(educationIndex: number) {
    this.resume.education[educationIndex].courses.push('');
    this.update();
  }

  addSkill() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.skills[0]);
    this.resume.skills.push(copy);
    this.update();
  }

  addKeyword(skillIndex: number) {
    this.resume.skills[skillIndex].keywords.push('');
    this.update();
  }

  addReference() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.references[0]);
    this.resume.references.push(copy);
    this.update();
  }

  addAward() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.awards[0]);
    this.resume.awards.push(copy);
    this.update();
  }

  update() {
    if (!this.autoFill) {
      this.ds.updateResume(0, this.resume);
    }
  }

  checkAutoFill() {
    if (!this.autoFill) {
      this.ds.updateResume(0, this.resume);
      this.resume = this.ds.templateResume;
    } else {
      this.resume = this.ds.resumeSub.getValue()[0];
    }
  }

  currentlyWorking(index: number) {
    if (!this.currentWork[index]) {
      this.resume.work[index].endDate = 'Current';
    }
  }

  toDate(s: string): Date {
    return new Date('2 06 2018');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
