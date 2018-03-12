import { Component, OnInit } from '@angular/core';
import { ResumeFormatModel } from '../../../models/resume-format.model';
import { FirebaseDatabaseService } from '../../../services/firebase-database.service';

@Component({
  selector: 'app-clean-theme',
  templateUrl: './clean-theme.component.html',
  styleUrls: ['./clean-theme.component.scss']
})
export class CleanThemeComponent implements OnInit {

  resume: ResumeFormatModel;
  constructor(ds: FirebaseDatabaseService) {
    this.resume = ds.templateResume;
    ds.resumeSub.subscribe(data => {
      if (ds.isSavingResume()) { // If the user is signed in
        if (data) {
          this.resume = data[0];
        }
      }
    });

    ds.autofill.subscribe(fill => {
      if (fill === true) {
        this.resume = ds.templateResume;
      } else {
        if (ds.resumeSub.getValue()) {
          this.resume = ds.resumeSub.getValue()[0];
        }
      }
    });
  }

  ngOnInit() {
  }

}
