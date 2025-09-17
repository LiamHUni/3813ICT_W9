import { Routes } from '@angular/router';
import { Prod } from './prod/prod';
import { ProdAdd } from './prod-add/prod-add';
import { ProdUpdate } from './prod-update/prod-update';

export const routes: Routes = [
    {
        path:"",
        component: Prod,
        title: "Products"
    },
    {
        path:"create",
        component: ProdAdd,
        title: "Add Product"
    },
    {
        path:"update",
        component: ProdUpdate,
        title: "Update Product"
    }
];
