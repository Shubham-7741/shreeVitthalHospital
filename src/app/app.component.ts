import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shreevitthalhospital';

  onActive() {
    window.scroll(0,0);
  }
}
