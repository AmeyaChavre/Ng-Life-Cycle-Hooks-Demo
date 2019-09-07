import { Component, 
	 OnInit, 
	 Input, 
	 ViewEncapsulation,
	 OnChanges, 
	 SimpleChanges, 
	 DoCheck, 
	 AfterContentInit,
	 AfterContentChecked,
	 AfterViewInit,
	 AfterViewChecked,
	 OnDestroy,
	 ViewChild
	  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is Default , Other values are None and Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  @Input('srvElement') element: {type:string ,name:string, content:string}; // defining an object element 
  @Input() name: string;
  @ViewChild('heading')
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

  ngDoCheck(){
  	console.log('ngDoCheck() called !');
  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit() called !');
  }

  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked() called !');
  }

  ngAfterViewInit(){
  	console.log('ngAfterViewInit() called !');
  }

  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked() called !');
  }

  ngOnDestroy(){
  	console.log('ngOnDestroy() called !');
  }
}
