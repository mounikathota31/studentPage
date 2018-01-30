import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // name: string;
  // year: string;
  // email: string;
  // branch: string;
  showBranch: boolean = false;

  lists: Array < object >= [];
  listing: Array < object >= [{
    name: '',
    year: '',
    email: '',
    branch: ''
}];

  constructor() {}

  ngOnInit() {

  }
  sumbitform() {
      this.lists = [];
      for(var i=0;i<this.listing.length;i++){
        var student = this.listing[i];
        this.lists.push(student);
      }
  }
  addRow() {
      this.listing.push({
          name: '',
          year: '',
          email: '',
          branch: ''
      });
  }



}
  

