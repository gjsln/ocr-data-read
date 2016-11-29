import { Component, OnInit } from '@angular/core';
import { OCRDataService } from './shared/app.ocrDataservices';

@Component({
  selector: 'ocr-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
  }
}
