import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  {
    type:'blueprint',
    name:'Test Server' ,
    content:'this is bluePrint'
  },
  {
    type:'server',
    name:'Test Server' ,
    content:'this is server'
  }
];
onServerCreated(serverData:{serverName:string,serverContent:string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBluePrintCreated(serverData:{serverName:string,serverContent:string}) {
this.serverElements.push({
  type: 'blueprint',
  name:serverData.serverName ,
  content: serverData.serverContent
});
}

  
}
