import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IItem} from './item';
import {IResponse} from './Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  //http GET method
  getItemsByName(searchName: string) : Observable<any> {
    if (searchName == "") {
      return this.http.get<any>(this.url + "getitems");
    }
    else {
      return this.http.get<any>(this.url + "getitemsbyname/" + searchName);
    }
  }

  //http POST method
  createItem(item: IItem) : Observable<IResponse> {
    return this.http.post<IResponse>(this.url + "createitem", item);
  }

  saveItem(item : IItem) : Observable<IResponse> {  
    return this.http.put<IResponse>(this.url + "updateitem/"+item._id, item);
  }

  deleteItem(id : string) : Observable<IResponse> {
    return this.http.delete<IResponse>(this.url + "deleteitem/" + id);
  }

}
