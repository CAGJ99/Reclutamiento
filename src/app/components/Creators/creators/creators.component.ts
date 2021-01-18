import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
@Input() creator:any;
  constructor() { }

  ngOnInit(): void {
  }

}
