import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  driArray = [
    { 
      saiId:1,
      img:"../../../assets/drn1.jpg",
      name : "Thums Up 600 ml",
      amt: "30.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/drn2.jpg",
      name : "Sprit 600ml",
      amt: "40.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/drn3.jpg",
      name : "Monster Energy Drink 350 ml",
      amt: "200.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/drn4.jpg",
      name : "Red Bull Energy Drink 250 ml (4 pcs)",
      amt: "380.00",
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
