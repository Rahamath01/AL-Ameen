import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css']
})
export class NoodlesComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  nodArray = [
    { 
      saiId:1,
      img:"../../../assets/noo1.jpg",
      name : "Maggi 2-Minute Masala Instant Noodles 560 g",
      amt: "87.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/noo2.jpg",
      name : "Maggi 2-Minute Masala Noodles 70 g",
      amt: "13.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/noo3.jpg",
      name : "Durum Wheat Pasta 500 gm x 1",
      amt: "157.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/noo4.jpg",
      name : "MTR Vermicelli 850 g",
      amt: "90.00",
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
