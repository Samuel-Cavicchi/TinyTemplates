import { Component, OnInit } from '@angular/core';
import { ResumeFormatModel } from '../../../models/resume-format.model';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-material-theme',
  templateUrl: './material-theme.component.html',
  styleUrls: ['./material-theme.component.scss']
})
export class MaterialThemeComponent implements OnInit {

  resume: ResumeFormatModel;

  constructor(public ts: ThemeService) {
    ts.currentResume.subscribe(data => {
      if (data) {
        this.resume = data;
      }
    });
  }

  ngOnInit() {
  }

}
