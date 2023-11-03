import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'
@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  bakeryArray = [
    { 
      saiId:1,
      img:"../../../assets/diary1.jpg",
      name : "Amul Butter 100 g (Carton)",
      amt: "56.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/diary2.jpg",
      name : "Amulya Dairy Whitener 1 kg (Pouch)",
      amt: "600.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/diary3.jpg",
      name : "Nestle Milkmaid Condensed Milk 380 g (Tin)",
      amt: "124.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/diary4.jpg",
      name : "Muffets & Tuffets Multigrain Bread 400 g",
      amt: "35.00",
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
