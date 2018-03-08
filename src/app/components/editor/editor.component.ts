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

  hideBasics = false;
  hideWork = true;
  hideVolunteer = true;
  hideEducation = true;
  hideSkills = true;
  hideReferences = true;
  hideAwards = true;
  ngOnDestroy() {
    if (this.currentSnackBar) {
      this.currentSnackBar.dismiss();
    }
  }
  ngOnInit() {
    // const now = moment(); // add this 2 of 4
    // console.log('hello world', now.format()); // add this 3 of 4
    // console.log(now.add(7, 'days').format()); // add this 4of 4
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
        horizontalPosition: 'right'
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
  // removeResumeComponent(component) {
  //   this.deleteConfirmation().then(() => {
  //     //if (component > 0) {
  //       console.log(component);
  //       component.parent.splice(component);
  //     //}
  //     this.update();
  //   }).catch(() => { return; });

  // }

  addWork() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.work[0]);
    this.resume.work.push(copy);
    this.update();
  }

  removeWork(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.work.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addHighlight(workIndex: number) {
    this.resume.work[workIndex].highlights.push('');
    this.update();
  }

  removeHighlight(workIndex: number, highlightIndex: number) {
    this.deleteConfirmation().then(() => {
      if (highlightIndex > 0) {
        this.resume.work[workIndex].highlights.splice(highlightIndex, 1);
      }
      this.update();
    }).catch(() => { return; });

  }

  addVolunteer() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.volunteer[0]);
    this.resume.volunteer.push(copy);
    this.update();
  }

  removeVolunteer(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.volunteer.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addVolunteerHighlight(volunteerIndex: number) {
    this.resume.volunteer[volunteerIndex].highlights.push('');
    this.update();
  }

  removeVolunteerHighlight(volunteerIndex: number, highlightIndex: number) {
    this.deleteConfirmation().then(() => {
      if (highlightIndex > 0) {
        this.resume.volunteer[volunteerIndex].highlights.splice(highlightIndex, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addEducation() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.education[0]);
    this.resume.education.push(copy);
    this.update();
  }

  removeEducation(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.education.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addCourse(educationIndex: number) {
    this.resume.education[educationIndex].courses.push('');
    this.update();
  }

  removeCourse(educationIndex: number, courseIndex: number) {
    this.deleteConfirmation().then(() => {
      if (courseIndex > 0) {
        this.resume.education[educationIndex].courses.splice(courseIndex, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addSkill() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.skills[0]);
    this.resume.skills.push(copy);
    this.update();
  }

  removeSkill(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.skills.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addKeyword(skillIndex: number) {
    this.resume.skills[skillIndex].keywords.push('');
    this.update();
  }

  removeKeyword(skillIndex: number, keywordIndex: number) {
    this.deleteConfirmation().then(() => {
      if (keywordIndex > 0) {
        this.resume.skills[skillIndex].keywords.splice(keywordIndex, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addReference() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.references[0]);
    this.resume.references.push(copy);
    this.update();
  }

  removeReference(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.references.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
  }

  addAward() {
    const copy = Object.assign({}, this.ds.emptyTemplateResume.awards[0]);
    this.resume.awards.push(copy);
    this.update();
  }

  removeAward(index: number) {
    this.deleteConfirmation().then(() => {
      if (index > 0) {
        this.resume.awards.splice(index, 1);
      }
      this.update();
    }).catch(() => { return; });
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
