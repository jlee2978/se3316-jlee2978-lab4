import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }