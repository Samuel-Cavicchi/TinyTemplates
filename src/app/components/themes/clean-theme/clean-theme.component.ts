import { Component, OnInit } from '@angular/core';
import { ResumeFormatModel } from '../../../models/resume-format.model';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-clean-theme',
  templateUrl: './clean-theme.component.html',
  styleUrls: ['./clean-theme.component.scss']
})
export class CleanThemeComponent implements OnInit {

  resume: ResumeFormatModel;
  constructor(ts: ThemeService) {
    ts.currentResume.subscribe(data => {
      if (data) {
        this.resume = data;
      }
    });
  }

  ngOnInit() {
  }

}
