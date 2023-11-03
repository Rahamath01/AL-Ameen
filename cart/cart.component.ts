import { Component , OnInit} from '@angular/core';
import {AuthService} from '../serivce/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  constructor(private auth:AuthService) {}
  ngOnInit() : void { 
    this.cartdetails();
    this.loadcart();

  }
  getcartdetails:any=[]; 
  cartdetails()
  {
    if(localStorage.getItem('localcart'))
    {
      this.getcartdetails=JSON.parse(localStorage.getItem('localcart')!);
      console.log(this.getcartdetails);
      
    }
  }
  total:number=0;
  loadcart()
  {
    if(localStorage.getItem('localcart'))
    {
      this.getcartdetails=JSON.parse(localStorage.getItem('localcart')!);
       this.total=this.getcartdetails.reduce(function(acc: any,val: any){
          return acc + (val.amt * val.qty)
       },0);
    }
  }
  delete(details:any)
  {
    console.log(details);
    if(localStorage.getItem('localcart')){
      this.getcartdetails= JSON.parse(localStorage.getItem('localcart')!);
      for(let i = 0; i<this.getcartdetails.length; i++){
        if(this.getcartdetails[i].saiId === details){
          this.getcartdetails.splice(i,1);
          localStorage.setItem('localcart',JSON.stringify(this.getcartdetails));
          this.loadcart();
          this.cartnumberfun();
          this.auth.cartsubject.next(this.cartnumber);
        }
      } 
    }
    

  }
  cartnumber=0;
  cartnumberfun()
  {
    var cartvalue=JSON.parse(localStorage.getItem('localcart')!);
    this.cartnumber=cartvalue.length;
    this.auth.cartsubject.next(this.cartnumber);
    
    
  }

}
