import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IItem } from './../item';
import { ItemService } from './../item.service';
import { interval, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @ViewChild('searchNameElement', { static: false }) searchNameElement: ElementRef;

  title = 'Item';
  private searchName = "";
  private role: string = '';   //will either take the value of "user" or "admin"

  error: any;
  items = [];
  newItem: IItem;

  // initialize a subcription object and a polling object
  subscription: Subscription = Subscription.EMPTY;
  private polling = interval(2000);

  constructor(private _service: ItemService, private route: ActivatedRoute, private router: Router) {
    // initialize a new item
    this.newItem = { _id: "", name: "", type: "Book", period: null, quantity: null };
   }

  ngOnInit() {
    // get the role value from the URL
    this.role = this.route.snapshot.paramMap.get("role");

    // if role is user, subscribe polling
    if (this.role == 'user') {
      this.subscription = this.polling.subscribe(v => { this.getItemsByName(); this.searchNameElement.nativeElement.focus() });
    }
  }

  ngOnDestroy() {
    // unsubscribe polling
    this.subscription.unsubscribe();
  }

  // Restful API calls
  getItemsByName() {
    this._service.getItemsByName(this.searchName).subscribe(
      data => this.items = data.items);
  }

  createItem(item: IItem) {
    this._service.createItem(item).subscribe(
      response => this.items.push(response.item));
    this.newItem = {_id: "", name: "", type: "Book", period: null, quantity: null};
  }

  updateItem(item: IItem) {
    this._service.updateItem(item).subscribe();
  }

  deleteItem(id: string, i: number) {
    this._service.deleteItem(id).subscribe(
      response => {if (response.error.code == 0) {
        this.items.splice(i, 1);
      }
    });
  }
}