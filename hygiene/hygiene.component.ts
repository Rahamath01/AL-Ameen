import { Component } from '@angular/core';

@Component({
  selector: 'app-hygiene',
  templateUrl: './hygiene.component.html',
  styleUrls: ['./hygiene.component.css']
})
export class HygieneComponent {
  constructor(){}
  
  ngOnInit(){

  }
  oilArray = [
    { 
      saiId:1,
      img:"../../../assets/oil1.jpg",
      name : "Fortune Premium Kachi Ghani Pure Mustard Oil 1 L",
      amt: 144.00,
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/oil2.jpg",
      name : "Fortune Sunlite Refined Sunflower Oil 5 L",
      amt: 599.00,
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/oil3.jpg",
      name : "Saffola Gold Rice Bran Based Blended Oil 3 L",
      amt: 91.00,
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/oil4.jpg",
      name : "Ruchi Gold Refined Palmolein Oil 900 g",
      amt: 144.00,
      qty:1,
    }
  ];

  dec(sai:any)
  {
   if(sai.qty!=1)
   {
    sai.qty -= 1;
   }
  }

  inc(sai:any)
  {
    if(sai.qty!=5)
   {
    sai.qty +=1;
   }
  }
}
