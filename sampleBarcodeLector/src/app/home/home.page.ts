import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public result: string = '';
  public error: string = '';

  constructor(private barcodeScanner: BarcodeScanner) { }

  openLectorQR() {

    this.barcodeScanner.scan().then(barcodeData => {
      this.result = barcodeData.text;
      console.log('Barcode data', this.result);
    }).catch(err => {
      this.error = err;
      console.log('Error', this.error);
    });

  }
}
