import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  alert:boolean =false

  constructor() { }

  ngOnInit(): void {
  }


  alertOnClick() {
    this.alert=true
}

close(){
    this.alert=false
}
}
