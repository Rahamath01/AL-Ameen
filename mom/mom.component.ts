import { Component } from '@angular/core';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.css']
})
export class MomComponent {
  constructor(){}
  
  ngOnInit(){

  }
  oilArray = [
    { 
      saiId:1,
      img:"../../../assets/mom1.jpg",
      name : "Bumtum Baby Diaper-Medium (72 pcs)",
      amt: "399.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/mom2.jpg",
      name : "MamyPoko Extra Absorb Pants (L) 54 count ",
      amt: 599.00,
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/mom3.jpg",
      name : "Cerelac Baby Cereal with Milk",
      amt: "329.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/mom4.jpg",
      name : "Amulspray Infant Milk Food Refill Pouch Pack 500 g",
      amt: "325.00",
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
