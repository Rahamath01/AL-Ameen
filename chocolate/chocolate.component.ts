import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  choArray = [
    { 
      saiId:1,
      img:"../../../assets/cho1.jpg",
      name : "Munch 18 Yummy Treats 160.2 g",
      amt: "66.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/cho2.jpg",
      name : "Lotte Choco Pie 28 g (12 pcs)",
      amt: "140.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/cho3.jpg",
      name : "Dairy Milk Fruit & Nut Chocolate 36 g",
      amt: "40.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/cho4.jpg",
      name : "KitKat Chocolate Share Bag 123.2 g (Pack of 8)",
      amt: "80.00",
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
