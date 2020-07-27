import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  hidden = true;

  toggleBadgeVisibility () {
    console.log('hidden change')
    this.hidden = !this.hidden
  }

}
