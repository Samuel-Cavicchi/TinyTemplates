import { Component, OnInit } from '@angular/core';
import { ResumeFormatModel } from '../../../models/resume-format.model';
import { FirebaseDatabaseService } from '../../../services/firebase-database.service';

@Component({
  selector: 'app-material-theme',
  templateUrl: './material-theme.component.html',
  styleUrls: ['./material-theme.component.scss']
})
export class MaterialThemeComponent implements OnInit {
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
  }

  ngOnInit() {
  }

}
