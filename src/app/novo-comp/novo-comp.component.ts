import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-comp',
  templateUrl: './novo-comp.component.html',
  styleUrls: ['./novo-comp.component.css']
})
export class NovoCompComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server created";
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }
  onUpdateServerName() {
    console.log("aaaaa");
 //   console.log(event);
  }
}
