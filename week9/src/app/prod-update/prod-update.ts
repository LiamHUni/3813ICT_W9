import { Component } from '@angular/core';
import { Product } from '../services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prod-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './prod-update.html',
  styleUrl: './prod-update.css'
})
export class ProdUpdate {
  prod = {
    id: null,
    name: "",
    desc: "",
    price: 0,
    units: 0
  }

  constructor(private prodService: Product, private router:Router){
    this.prod = this.router.getCurrentNavigation()?.extras.state?.['product'];
  }

    submit(){
    if((this.prod.id || this.prod.id === 0) && this.prod.name && this.prod.desc){
      this.prodService.productUpdate(this.prod).subscribe(
        res=>{
          console.log(res);
          if(res.err){
            alert(res.err);
          }else{
            alert(res.mess);
            this.router.navigateByUrl('');
          }
        }
      )
    }else{
      alert("All inputs must be filled");
    }
  }
}
