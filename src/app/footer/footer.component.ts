import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  legalExpanded = false;

  toggleLegal(): void {
    this.legalExpanded = !this.legalExpanded;
  }
}
