import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  hasAlert: boolean = false;
  alertText: string;
  type: string = 'success';

  closeAlert() {
    this.hasAlert = false;
    this.alertText = "";
  }

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.alertService.newAlert.subscribe(
      (array) => {
        if(array[0]!=undefined){
          this.hasAlert = true;
        } else {
          this.hasAlert = false;
        }
        this.alertText = array[0];
        this.type = array[1];
      }
    );
  }

}
