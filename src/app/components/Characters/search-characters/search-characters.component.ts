import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../services/characters.service.service';


@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css']
})
export class SearchCharactersComponent implements OnInit ,OnDestroy{
  Allcharacter: any;
  description:any;
  constructor(private actRoute:ActivatedRoute, private characterApi:CharactersService) { }

  ngOnInit() {
   this.actRoute.params.subscribe(recibo=>{
     let codigo = recibo.id;
     this.GetCharacter(codigo)

   })
  }
  GetCharacter(id: string) {
    this.characterApi.getOneCharacter(id)
    .subscribe(data => {
      this.Allcharacter  = data.data.results;
  
    });
  }
  
  ngOnDestroy():void{
    
  }

}
