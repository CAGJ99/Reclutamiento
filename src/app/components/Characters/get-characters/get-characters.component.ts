import { Component,OnInit,OnDestroy} from '@angular/core';
import { CharactersService } from '../../../services/characters.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-characters',
  templateUrl: './get-characters.component.html',
  styleUrls: ['./get-characters.component.css']
})
export class GetCharactersComponent  implements OnInit,OnDestroy{
Allcharacter: any =[];
id:any;

  constructor(private characterApi:CharactersService ,private router:Router) { }
codigo:any;
  ngOnInit() {

   this.GetCharacters();
  }

    GetCharacters() {
    return this.characterApi.getInformation()
    .subscribe( data => {
     this.Allcharacter  = data.data.results;

    });
  }
 
  
  ngOnDestroy(){
    this.GetCharacters().unsubscribe();
  
  }

}
