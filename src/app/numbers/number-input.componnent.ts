import {Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
  selector: 'app-numbers',
  templateUrl: './number-input.component.html'
})

export class NumberInputComponent{

  @Input() num :number;
  @Output() save_num = new EventEmitter<number>();

   clickIncrease(){
      this.num++;
   }

   clickDecrease(){
     this.num--;
   }

   clicksave(){
    this.save_num.emit(this.num);
   }

}













