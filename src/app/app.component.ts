import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title1 = 'app';
  imagepath: string = 'http://www.educationandhra.com/wp-content/uploads/2013/12/ou-logo.png';
  imagepath2: string = 'https://i1.wp.com/cdn.wallpapersafari.com/56/63/6fqYFS.jpg?resize=640%2C435&ssl=1';



  show: boolean = false;
  toggle() {
      this.show = !this.show

  }
}