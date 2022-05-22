import { Component, VERSION, ViewChild, AfterViewInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  links = ['Bar Code', 'QR Code', 'Read Me'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  isError = false;
  publ output: string;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
  
  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent;
  barcodeValue: any;

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any, isQR: boolean) {
    if (isQR) {
      this.barcodeValue = result;
    } else {
      this.barcodeValue = result.codeResult.code;
    }

    console.log(result);
  }

  onStarted(started: any) {
    console.log(started);
  }

  
  // barcodeValue: any;
  // value!: string;
  // @ViewChild(NgxBarcodeScannerComponent)
  // barecodeScanner!: NgxBarcodeScannerComponent;

}
