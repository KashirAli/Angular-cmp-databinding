import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild ,} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 
  @Output() afterServerbtn = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() afterblueprintbtn = new EventEmitter<{serverName:string,serverContent:string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('InputContent') InputContent:ElementRef;
  constructor() { }
 
  ngOnInit(): void {
  }
  
   onAddServer(inputValue) {
     this.afterServerbtn.emit({
       serverName: (<HTMLInputElement>inputValue).value,
       serverContent:this.InputContent.nativeElement.value
     });
   }

   onAddBlueprint(inputValue) {
   this.afterblueprintbtn.emit({
     serverName: (<HTMLInputElement>inputValue).value,
     serverContent: this.InputContent.nativeElement.value
   });
 }
}
