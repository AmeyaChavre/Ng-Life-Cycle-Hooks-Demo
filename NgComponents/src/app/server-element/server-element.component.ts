import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is Default , Other values are None and Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type:string ,name:string, content:string}; // defining an object element 
  @Input() name: string;
  // Life Cycle Hooks Demonstration 
  // using @Input decorator to expose the property to parent compnent in this case app component
  constructor() { 
  	console.log('contructor() called !');
  }

  ngOnChanges(changes: SimpleChanges){
  	console.log('ngOnChanges() called !');
}
  ngOnInit() {
  	console.log('ngOnInit() called !');
  }

}
