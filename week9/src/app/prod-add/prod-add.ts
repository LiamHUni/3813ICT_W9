import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';

@Component({
  selector: 'app-prod-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './prod-add.html',
  styleUrl: './prod-add.css'
})
export class ProdAdd {
  prodLayout = {
    id: null,
    name: "",
    desc: "",
    price: 0,
    units: 0
  }

  prod = {
    id: null,
    name: "",
    desc: "",
    price: 0,
    units: 0
  }

  constructor(private prodService: Product){}

  submit(){
    if((this.prod.id || this.prod.id === 0) && this.prod.name && this.prod.desc){
      this.prodService.productAdd(this.prod).subscribe(
        res=>{
          console.log(res);
          if(res.err){
            alert(res.err);
          }else{
            alert(res.mess);
            this.prod = {...this.prodLayout};
            console.log(this.prodLayout);
          }
        }
      )
    }else{
      alert("All inputs must be filled");
    }
  }
}
