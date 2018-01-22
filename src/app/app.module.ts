import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
       {path: 'list', component: ListComponent}
       ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
