import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-deviceinput',
  templateUrl: './deviceinput.component.html',
  styleUrls: ['./deviceinput.component.css']
})
export class DeviceinputComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  addhost(){
    let data =  {
      "hostname": "xlabs",
      "id": 3,
      "loopback": "192.168.0.1",
      "interfaces": ''
    }
    this.commonService.newhost(data).subscribe(res =>{
      console.log(res.json());
    })
  }

}
