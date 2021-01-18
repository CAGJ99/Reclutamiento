import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})

export class ComicComponent implements OnInit {
@Input() comic:any;
  constructor(private router:Router) { }
  _codigo:any;
  ngOnInit(): void {
  }

  sendId(codigo:string){
    this._codigo = codigo;
   
    this.router.navigate(['marvel/search/comic/',this._codigo])
  }
}
