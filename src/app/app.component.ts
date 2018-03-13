import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise no.1 — Authors';
  authors = [
    'Douglas Adams',
    'Steven King',
    'William Sahkespeare',
    'Carl Sagan'
  ];
}
