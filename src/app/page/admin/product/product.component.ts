import { Component,OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  isSidePanelVisible: boolean= false;
  productObj: any={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };
  categoryList:any [] =[];


  constructor(private productSrv: ProductService) {
  }
  ngOnInit() {
    this.getAllCategory();
  }
   getAllCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
           this.categoryList=res.data;
      })
    }
  openSidePanel(){
    this.isSidePanelVisible=true;
    }

   closeSidePanel(){
     this.isSidePanelVisible=false;

   }

}
