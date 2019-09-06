import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is Default , Other values are None and Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type:string ,name:string, content:string}; // defining an object element 

  // using @Input decorator to expose the property to parent compnent in this case app component
  constructor() { 
  console.log("Contructor Called!!");
  }

  ngOnInit() {
  }

}
