import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }