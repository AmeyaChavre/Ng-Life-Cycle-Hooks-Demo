import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server' ,name:'TestServer', content:'This is a test server'}];
  
  onAddServer() {
    //this.serverElements.push({
     // type: 'server',
      //name: this.newServerName,
      //content: this.newServerContent
    //});
  }

  onAddBlueprint() {
  //  this.serverElements.push({
    //  type: 'blueprint',
     // name: this.newServerName,
      //content: this.newServerContent
    //});
  }
}
