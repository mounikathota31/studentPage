import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'app';
  imagepath:string='http://www.educationandhra.com/wp-content/uploads/2013/12/ou-logo.png';

  

  show:boolean=false;
 toggle(){
  this.show=!this.show
 
 }
 }
