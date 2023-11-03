import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-nuts',
  templateUrl: './nuts.component.html',
  styleUrls: ['./nuts.component.css']
})
export class NutsComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  nutArray = [
    { 
      saiId:1,
      img:"../../../assets/nuts1.jpg",
      name : "Brill 1Kg Premium Whole Cashews (500g x 2pack)",
      amt: "699.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/nuts2.jpg",
      name : "Good Life Yellow Kishmish 500 g",
      amt: "129.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/nuts3.jpg",
      name : "Good Life Almonds 500 g",
      amt: "365.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/nuts4.jpg",
      name : "RHealthy Mix Dry Fruits 1kg(500gms*2)",
      amt: "599.00",
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
  itemscart:any = [];
  addcart(sai: any) {
    let cartnull = localStorage.getItem('localcart');
    if (cartnull == null) { 
      let storedata: any = [];
      storedata.push(sai);
      localStorage.setItem('localcart', JSON.stringify(storedata));
    }

    else {
      var id = sai.saiId;
      let index:number = -1;
      this.itemscart = JSON.parse(localStorage.getItem('localcart')!);
      for (let i=0; i<this.itemscart.length; i++) {
        if (parseInt(id) === parseInt(this.itemscart[i].saiId)) {
          this.itemscart[i].qty= sai.qty;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemscart.push(sai);
        localStorage.setItem('localcart', JSON.stringify(this.itemscart));
      }
      else {
        localStorage.setItem('localcart', JSON.stringify(this.itemscart));
      }

    }
    this.cartnumberfun();

  }

  cartnumber=0;
  cartnumberfun()
  {
    var cartvalue=JSON.parse(localStorage.getItem('localcart')!);
    this.cartnumber=cartvalue.length;
    this.auth.cartsubject.next(this.cartnumber);
    
    
  }



}
