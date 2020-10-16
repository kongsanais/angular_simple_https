import { Component, OnDestroy, OnInit} from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit,OnDestroy {
 personList: string[];
 private personListSubs : Subscription

 constructor(private prsService: PersonsService){
  //this.personList = prsService.persons;
 }

ngOnInit(){

  this.personListSubs = this.prsService
  .personsChanged
  .subscribe(persons => {
    this.personList = persons;
  });
  this.prsService.fecthPerson();

}

OnRemovePerson(personName: string){
  this.prsService.removePerson(personName);
}

ngOnDestroy(){
 this.personListSubs.unsubscribe();
}



}
