import { Component, VERSION, ViewChild, AfterViewInit } from '@angular/core';
import { NgxBarcodeScannerComponent } from '@eisberg-labs/ngx-barcode-scanner';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  // barcodeValue: any;
  // value!: string;
  isError = false;
  // @ViewChild(NgxBarcodeScannerComponent)
  // barecodeScanner!: NgxBarcodeScannerComponent;

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue;

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
    console.log(result);
  }

  onStarted(started: any) {
    console.log(started);
  }
}
