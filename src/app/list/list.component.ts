import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  name: string="" ;
  year: string="" ;
  email: string="" ;
  branch: string="" ;

  lists:Array<object>=[{name: '' , year: '' , email: '' , branch: ''  }];


  constructor() {}

  ngOnInit(){

  }
    sumbitform(){
     var data = {name:this.name,year:this.year,email:this.email,branch:this.branch};
     this.lists.push(data);
     this.name='';this.year='';this.email='';this.branch='';
   }
  
  }
  

