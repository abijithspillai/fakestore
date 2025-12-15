import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  // repeat=Array.from({ length:6 });
  products:any[]=[];
  constructor(private apiservice:Apiservice){}
  ngOnInit(){
    this.apiservice.getProduct().subscribe((data:any)=>{
      this.products=data;
      console.log(data)
    });
  }
}
