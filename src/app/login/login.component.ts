import { Component} from '@angular/core';
import { Directive } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  name: string="" ;
  password: string="" ;

  
  lists:Array<object>=[{name: '' , password: '' }];
  constructor() {}


  submitclick(){
    
    var data = {name:this.name,password:this.password};
    this.lists.pop();
    this.lists.push(data);
    this.name='';this.password='';
   
  }

  
}
