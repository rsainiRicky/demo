import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devicelisting',
  templateUrl: './devicelisting.component.html',
  styleUrls: ['./devicelisting.component.css']
})
export class DevicelistingComponent implements OnInit {
  editMode:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  updateFn(){
    this.editMode = false;
  }

}
