import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserCreateComponent} from './Users/user-create/user-create.component';
import {FormsModule} from '@angular/forms';
import {UserListComponent} from './Users/user-list/user-list.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './menu/menu.component';
import { UserSearchComponent } from './Users/user-search/user-search.component';
import { FooterComponent } from './footer/footer.component';
import { ListHeaderComponent } from './Users/user-list/list-header/list-header.component';
import { ListContentComponent } from './Users/user-list/list-content/list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    MenuComponent,
    UserSearchComponent,
    FooterComponent,
    ListHeaderComponent,
    ListContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
