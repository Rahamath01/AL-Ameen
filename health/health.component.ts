import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  healArray = [
    { 
      saiId:1,
      img:"../../../assets/hell1.jpg",
      name : "Dettol |1kg",
      amt: "950.00",
      qty:1,
    },
    {
      saiId:2,
      img:"../../../assets/hell2.jpg",
      name : "Herbalife Nutrition Formula 1 Vanilla ",
      amt: "2999.00",
      qty:1,
    },
    {
      saiId:3,
      img:"../../../assets/hell3.jpg",
      name : "Kobra Labs The Bull Mass Gainer Weight Gainers",
      amt: "400.00",
      qty:1,
    },
    {
      saiId:4,
      img:"../../../assets/hell4.jpg",
      name : "Vicks VapoRub Cough & Cold Relief Balm 50 ml",
      amt: "144.00",
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
