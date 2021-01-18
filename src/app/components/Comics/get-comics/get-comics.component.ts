import { Component, OnInit,OnDestroy} from '@angular/core';
import { ComicsService } from '../../../services/comics.service';


@Component({
  selector: 'app-get-comics',
  templateUrl: './get-comics.component.html',
  styleUrls: ['./get-comics.component.css']
})
export class GetComicsComponent implements OnInit, OnDestroy{
Comics:any = []
  constructor(private comicsApi:ComicsService) { }

  ngOnInit() {

    this.GetComics();
   }
 
   GetComics() {
     return this.comicsApi.getComics()
     .subscribe( data => {
      this.Comics  = data.data.results;
    
     });
   }
   ngOnDestroy(){

    this.GetComics().unsubscribe();
   }

}
