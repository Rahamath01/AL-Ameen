import { Component } from '@angular/core';
import {AuthService} from '../serivce/auth.service'

@Component({
  selector: 'app-atta',
  templateUrl: './atta.component.html',
  styleUrls: ['./atta.component.css']
})
export class AttaComponent {
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  attaArray = [
    { 
      saiId:5,
      img:"../../../assets/atta1.jpg",
      name : "Aashirvaad Superior MP Whole Wheat Atta 5 kg",
      amt: "245.00",
      qty:1,
    },
    {
      saiId:6,
      img:"../../../assets/atta2.jpg",
      name : "Aashirvaad Select Sharbati Whole Wheat Atta 5 kg",
      amt: "350.00",
      qty:1,
    },
    {
      saiId:7,
      img:"../../../assets/atta1.jpg",
      name : "Aashirvaad Superior MP Whole Wheat Atta 1 kg",
      amt: "70.00",
      qty:1,
    },
    {
      saiId:8,
      img:"../../../assets/atta1.jpg",
      name : "Aashirvaad Superior MP Whole Wheat Atta 10 kg",
      amt: "500.00",
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
