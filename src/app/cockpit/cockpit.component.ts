import { Component, EventEmitter, OnInit, Output ,} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 
  @Output() afterServerbtn = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() afterblueprintbtn = new EventEmitter<{serverName:string,serverContent:string}>();

  // newServerName = '';
  newServerContent = '';

  constructor() { }
 
  ngOnInit(): void {
  }
  
   onAddServer(inputValue) {
     this.afterServerbtn.emit({
       serverName: (<HTMLInputElement>inputValue).value,
       serverContent:this.newServerContent
     });
   }

   onAddBlueprint(inputValue) {
   this.afterblueprintbtn.emit({
     serverName: (<HTMLInputElement>inputValue).value,
     serverContent: this.newServerContent
   });
 }
}
