import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxBarcodeScannerModule,
    BarcodeScannerLivestreamModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
