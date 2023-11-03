import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.css']
})
export class BiscuitsComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  bisArray = [
    { 
      saiId:1,
      img:"../../../assets/bis1.jpg",
      name : "Britannia Jimjam Sandwich Biscuits 138 g",
      amt: "29.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/bis2.jpg",
      name : "Parle Hide & Seek Chocolate Chip Cookies 100 g",
      amt: "25.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/bis3.jpg",
      name : "Sunfeast Dark Fantasy Choco Filled Cookie 300 g",
      amt: "99.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/bis4.jpg",
      name : "Lay's India's Magic Masala Potato Chips 90 g",
      amt: "40.00",
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
