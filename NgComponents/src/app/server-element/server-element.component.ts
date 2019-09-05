import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type:string ,name:string, content:string}; // defining an object element 

  // using @Input decorator to expose the property to parent compnent in this case app component
  constructor() { }

  ngOnInit() {
  }

}
