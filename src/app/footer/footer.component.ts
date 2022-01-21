import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-element',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input('show-actions') showActions : boolean = true;

  constructor() { }

}