import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {
  remainingLots;
  constructor(public router:Router) { }

  ngOnInit() {
    this.remainingLots = false;
  }
  
onClickMore(){
 this.remainingLots = !this.remainingLots;
}
onViewResponses(){
 this.router.navigateByUrl('../responses');
}
onPost(){
  this.router.navigateByUrl('../post');
}
}
