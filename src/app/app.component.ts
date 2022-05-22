import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  links = ['Bar Code', 'QR Code', 'Read Me'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  isError = false;
  output: string;


  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent;
  @ViewChild(NgxScannerQrcodeComponent) qrcodeh: NgxScannerQrcodeComponent;
  // @ViewChild('qrcodeh') QRScanner: NgxScannerQrcodeComponent;

  barcodeValue: any;
  constructor(private cdref: ChangeDetectorRef) { }


  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }


  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  clickTab(link: any) {

    this.activeLink = link.target.textContent.trim().toString().replace('qr_code', '');
   
    switch (this.activeLink) {
      case 'Bar Code':
        if (this.qrcodeh) {
          this.qrcodeh.stop();
        }
        setTimeout(() => {
          if (this.barcodeScanner) {
            this.barcodeScanner.start();
          }
        }, 1000);
        break;
      case 'QR Code':
        if (this.barcodeScanner) {
          this.barcodeScanner.stop();
        }
        setTimeout(() => {
          if (this.qrcodeh) {
            this.qrcodeh.start();
          }
        }, 1000);
        break;
      default:
        break;
    }
  }

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }

  onValueChanges(result: any, isQR: boolean) {
    if (isQR) {
      this.barcodeValue = result;
    } else {
      this.barcodeValue = result.codeResult.code;
    }

    console.log(result);
  }

  onStarted(started: any, isQR: boolean) {
    console.log(started);
    if (isQR && this.qrcodeh && !this.qrcodeh.isStart && started) {
      this.cdref.detectChanges();
    } 
    if (!isQR && this.barcodeScanner && !this.barcodeScanner.isStarted && started) {
      this.cdref.detectChanges();
    }
  }

  cameraToggle(isQR: boolean) {
    if (isQR) {
      this.qrcodeh.toggleCamera(); 
    } else {
      this.barcodeScanner.isStarted ? this.barcodeScanner.stop() : this.barcodeScanner.start();
    }
  }

  getdisabled(isQR: boolean) {
    if (isQR) {
      return !(this.qrcodeh && this.qrcodeh.isStart); 
    } else {
      return !(this.barcodeScanner && this.barcodeScanner.isStarted) ;
    }
  }

}
