import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataOwnerComponent} from './data-owner/data-owner.component';
import {DataClienteComponent} from './data-cliente/data-cliente.component';
import { CenterTypeEditListSocketComponent } from './center-type-edit-list-socket/center-type-edit-list-socket.component';
import {SocketIoModule} from 'ngx-socket-io';
import {config} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DataOwnerComponent,
    DataClienteComponent,
    CenterTypeEditListSocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
