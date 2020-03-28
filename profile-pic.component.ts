
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {
  // myface:string = "/app/profile-pic/download.png";
    myface:string = "/assets/images/download.jpg";
    serverId: number = 10;
    serverStatus: string = 'offline';
    allowNewServer: boolean = false;
    myString: string = "please axe questions";
     subResponse: string = "";
     questions: string[] = [ "q1",
     "q2",
     "tell me about yourself",
     "what is your favorit color",
     "what are your hobbies",
     "can you paremterize this list?"
      ];
      askedQuestion: string = '';
      // return name +"s  " + this.serverStatus;

    inputQuestion($event,newQ: string){
      this.askedQuestion = newQ;
      return this.subResponse += "your question has been submitted";
     }

  constructor() {
    setTimeout(() => {
      this.allowNewServer= true;
    }, 2000);
  }

  ngOnInit() {
  }

}
