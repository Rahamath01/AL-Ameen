import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  perArray = [
    { 
      saiId:1,
      img:"../../../assets/pres1.jpg",
      name : "Clinic Plus+ Strong & Long Health Shampoo 1 L",
      amt: "384.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/pres2.jpg",
      name : "Sesa Ayurvedic Medicinal Shampoo 500ml",
      amt: "599.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/pres3.jpg",
      name : "Dove Nutritive Solutions Daily Shine Shampoo 650 ml",
      amt: "499.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/pres4.jpg",
      name : "Sesa Onion Hair Oil with Bhringraj for Hair Growth",
      amt: "276.00",
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
