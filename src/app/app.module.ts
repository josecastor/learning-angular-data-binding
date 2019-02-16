import { MeuFormComponent } from './meu-form/meu-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    MeuFormComponent,
    InputPropertyComponent,
    OutputPropertiesComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
