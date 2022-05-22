import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    BarcodeScannerLivestreamModule,
    NgxScannerQrcodeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
