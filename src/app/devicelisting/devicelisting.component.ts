import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-devicelisting',
  templateUrl: './devicelisting.component.html',
  styleUrls: ['./devicelisting.component.css']
})
export class DevicelistingComponent implements OnInit {
  editMode:boolean = false;
  hosts:any = [];
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.gethosts().subscribe(res=>{
      this.hosts = res.json();
    })
  }

  updateFn(){
    this.editMode = false;
  }

}
