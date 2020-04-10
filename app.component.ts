import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-resume';

  serverName= 'aaaaa';
  serverID = '';
  serverStatus = 'online';


  onCreateServer($event) {
    // alert("hi");
    this.serverStatus = 'online';
    this.serverID = '1';
    this.serverName = " a";
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
  }

}
