import { Component, OnInit } from '@angular/core';
import {AuthService} from '../serivce/auth.service'


@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  oilArray = [
    {
      saiId: 1,
      img: "../../../assets/oil1.jpg",
      name: "Fortune Premium Kachi Ghani Pure Mustard Oil 1 L",
      amt: "144.00",
      qty: 1,
    },
    {
      saiId: 2,
      img: "../../../assets/oil2.jpg",
      name: "Fortune Sunlite Refined Sunflower Oil 5 L",
      amt: "599.00",
      qty: 1,
    },
    {
      saiId: 3,
      img: "../../../assets/oil3.jpg",
      name: "Saffola Gold Rice Bran Based Blended Oil 3 L",
      amt: "91.00",
      qty: 1,
    },
    {
      saiId: 4,
      img: "../../../assets/oil4.jpg",
      name: "Ruchi Gold Refined Palmolein Oil 900 g",
      amt: "144.00",
      qty: 1,
    }
  ];

  dec(sai:any) {
    if (sai.qty != 1) {
      sai.qty -= 1;
    }
  }

  inc(sai: any) {
    if (sai.qty != 5) {
      sai.qty += 1;
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
