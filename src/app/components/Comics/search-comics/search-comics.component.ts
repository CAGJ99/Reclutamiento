import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../../../services/comics.service';


@Component({
  selector: 'app-search-comics',
  templateUrl: './search-comics.component.html',
  styleUrls: ['./search-comics.component.css']
})
export class SearchComicsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute, private comicsApi:ComicsService) { }
  codigo:any;
  comic:any;
  ngOnInit() {

    this.actRoute.params.subscribe(recibo=>{
      this.codigo = recibo.id;
      this.GetComic(this.codigo);

    });
  }
GetComic(id:string){
  this.comicsApi.searchComic(id).subscribe(data=>{
    this.comic = data.data.results;
    console.log(this.comic);
  });
}
}
