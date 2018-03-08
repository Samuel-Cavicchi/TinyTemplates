import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialThemeComponent } from './material-theme/material-theme.component';
import * as jsPDF from 'jspdf';
import * as htmlCanvas from 'html2canvas';
import * as moment from 'moment';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor() { }
  selectedTheme = 'Mat1';
  themes: Array<any> = [
    {
      name: 'Material',
      value: 'Mat1',
      available: true
    },
    {
      name: 'Clean',
      value: 'Clean1',
      available: true
    },
    {
      name: 'BlueGrey',
      value: 'BLueGrey1',
      available: false
    },
  ];

  ngOnInit() {
  }

  generatePDF() {
    let themeElement = document.getElementById('theme-section');
    htmlCanvas(themeElement, {
      scale: 2.5,
    }).then((canvas) => {
      const divFactor = 5;
      const width = canvas.width / divFactor;
      const height = canvas.height / divFactor;
      const pdf = new jsPDF('1', 'pt', [width, height]);
     // const img = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(canvas, 'JPG', -5, -5, width, height);
      const now = moment();
      pdf.save(now.format('MMM Do').toString() + ' - TinyTemplate.pdf');
    });


  }

}
