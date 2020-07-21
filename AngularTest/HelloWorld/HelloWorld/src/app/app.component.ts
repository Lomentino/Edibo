import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';

  hidden1 = false;

  toggleBadgeVisibility1() {
    this.hidden1 = !this.hidden1;
  }
}
