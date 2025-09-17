import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod',
  imports: [FormsModule, CommonModule],
  templateUrl: './prod.html',
  styleUrl: './prod.css'
})
export class Prod {

  constructor(private prodService: Product, private router:Router){}

  prods:[]|any=[];

  ngOnInit(){
    this.retrieveProducts();
  }
  
  retrieveProducts(){
    this.prodService.productRetreieve().subscribe(
      res=>{
        this.prods = res;
        console.log(this.prods);
      }
    );  
  }

  deleteProduct(prod:any){
    const con = confirm(`Delete ${prod.name}?`);
    if(con){
      this.prodService.productRemove(prod._id).subscribe(
        res=>{
          console.log(res);
          this.retrieveProducts();
        }
      );
    }
  }

  updateProduct(prod:any){
    this.router.navigate(['/update'], {state:{product:prod}});
  }
}
