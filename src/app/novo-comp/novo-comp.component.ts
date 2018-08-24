import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-comp',
  templateUrl: './novo-comp.component.html',
  styleUrls: ['./novo-comp.component.css']
})
export class NovoCompComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server created";
  serverName = "teste";
  serverCreated = false;
  servers = ['Testserver','Testeserver 2'];
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = "Server was created! " + this.serverName ;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event:any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    
    // Convertendo o valor
  }
}
