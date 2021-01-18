import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreatorsService } from '../../../services/creators.service';


@Component({
  selector: 'app-get-creators',
  templateUrl: './get-creators.component.html',
  styleUrls: ['./get-creators.component.css']
})
export class GetCreatorsComponent implements OnInit, OnDestroy {

  constructor(private creatorsApi: CreatorsService) { }
   creators:any
  ngOnInit() {
    this.GetCreators();
  }

  GetCreators(){
    return this.creatorsApi.getCreators().subscribe(data=>{
     this.creators=data.data.results;
    })
  }

  ngOnDestroy(){
    this.GetCreators().unsubscribe();
  }
 
}
