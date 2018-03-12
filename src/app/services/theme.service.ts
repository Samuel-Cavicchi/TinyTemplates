import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from './firebase-database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ResumeFormatModel } from '../models/resume-format.model';

@Injectable()
export class ThemeService {

  constructor(public ds: FirebaseDatabaseService) {
    ds.resumeSub.subscribe(data => {
      if(data && !ds.autofill.getValue()){
        this.currentResume.next(data[0]);

      }
    });
    ds.autofill.subscribe(fill => {
      if (fill === true) {
        this.currentResume.next(ds.templateResume);
      } else {
        if (ds.resumeSub.getValue()) {
          this.currentResume.next(ds.resumeSub.getValue()[0]);
        }
      }
    });
  }

  public currentResume: BehaviorSubject<ResumeFormatModel> = new BehaviorSubject<ResumeFormatModel>(this.ds.templateResume);
  public templateResume = this.ds.templateResume;
}
