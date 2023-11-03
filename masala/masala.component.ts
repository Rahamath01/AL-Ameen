import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-masala',
  templateUrl: './masala.component.html',
  styleUrls: ['./masala.component.css']
})
export class MasalaComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  masalaArray = [
    { 
      saiId:1,
      img:"../../../assets/masala1.jpg",
      name : "Good Life Jeera 100 g",
      amt: "89.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/masala2.jpg",
      name : "Navjeevan 500g Green Cardamom | Green Elaichi",
      amt: "899.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/masala3.jpg",
      name : "Good Life Chilli Powder 100 g",
      amt: "33.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/masala4.jpg",
      name : "Good Life Coriander Powder 100 g",
      amt: "17.00",
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
