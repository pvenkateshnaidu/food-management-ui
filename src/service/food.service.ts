import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {
  }

  getAllFoods() {
    return this.http.get<any>(`${environment.api}/foods/findAllFoods`)
  }
}
