import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input() character:any;
  constructor( private router: Router,
    private actRoute: ActivatedRoute) { }
codigo:any;
  ngOnInit() {
  }
  sendId(code:any){
    this.codigo = code;
   this.router.navigate(['marvel/search/character/',this.codigo]);
    
  }
}

