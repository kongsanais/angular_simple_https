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
  // this.personList = this.prsService.persons;
  this.prsService.fecthPerson();
  this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
    this.personList = persons;
  });
}

OnRemovePerson(personName: string){
  this.prsService.removePerson(personName);
}

ngOnDestroy(){
 this.personListSubs.unsubscribe();
}



}
