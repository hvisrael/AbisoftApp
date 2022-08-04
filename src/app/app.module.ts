import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbisoftPersonasComponent } from './abisoft-personas/abisoft-personas.component';
import { AbisoftPersonaComponent } from './abisoft-personas/abisoft-persona/abisoft-persona.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AbisoftPersonasComponent,
    AbisoftPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
