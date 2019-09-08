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
	 ViewChild,
	 ElementRef,
	 ContentChild
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
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
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
  	console.log('Text Content : ' + this.header.nativeElement.textContent); // the text won't appear
  	console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
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
  	console.log('Text Content : ' + this.header.nativeElement.textContent); // the text will appear now after View Initializes
  }
  // check this in console in dev tools
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked() called !');
  }

  ngOnDestroy(){
  	console.log('ngOnDestroy() called !');
  }
}
