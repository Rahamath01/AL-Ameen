import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'

@Component({
  selector: 'app-dals',
  templateUrl: './dals.component.html',
  styleUrls: ['./dals.component.css']
})
export class DalsComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  dalArray = [
    { 
      saiId:1,
      img:"../../../assets/dals1.jpg",
      name : "Tur / Arhar Dal 2 kg",
      amt: "322.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/dals2.jpg",
      name : "Farmbean Brown Horse Gram (250 gms) Kollu 250g",
      amt: "144.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/dals3.jpg",
      name : "Good Life Raw Peanuts 500 g",
      amt: "93.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/dals4.jpg",
      name : "Good Life Small Brown Chana 500 g",
      amt: "53.00",
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
