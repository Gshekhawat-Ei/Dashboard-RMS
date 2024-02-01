import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory(){

    return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_CATEGORY)
  }
}
