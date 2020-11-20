import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './UserApp/user-list/userlist.component'
import {UserFormComponent} from './UserApp/user-form/userform.component'
import { UserService } from './UserApp/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,  FormsModule,
    AppRoutingModule,    HttpClientModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
