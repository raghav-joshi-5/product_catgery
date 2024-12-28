import { Component, ElementRef, ViewChild } from '@angular/core';
import { Idata, ProductCatalog } from './shared/module/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product_catgery';
  proData: Array<Idata> = [
    {
      proName: 'Lenovo IdeaPad Slim 3',
      proDesc: `13th Gen Intel Core i7-13620H 15" (38.1cm) FHD IPS 300 Nits Thin & Light Laptop (16GB/512GB SSD/Win 11/MSO 21/1Yr ADP Free/Alexa Built-in/3 mon Game Pass/Grey/1.6Kg)`,
      product: ProductCatalog.PRODUCT,
      // product: 'product',
    },
    {
      proName: 'Mobile Phone list',
      proDesc: `Apple iPhone 16,
                Samsung Galaxy S24 Ultra,
                Google Pixel 9 Pro,
                OnePlus 12,
                Nothing Phone 2,
                Google Pixel 8a,
                Sony Xperia 1 VI,
                OnePlus Open,`,
      product: ProductCatalog.CATLOG,
      // product: 'catlog',
    },
  ];

  @ViewChild('proName') proName!: ElementRef;
  @ViewChild('proDesc') proDesc!: ElementRef;
  @ViewChild('product') product!: ElementRef;

  onAddData() {
    if (
      this.proName.nativeElement.value == '' ||
      this.proDesc.nativeElement.value == '' ||
      this.product.nativeElement.value == ''
    ) {
      alert('Please fill all the fields');
      return;
    }
    let newObj: Idata = {
      proName: this.proName.nativeElement.value,
      proDesc: this.proDesc.nativeElement.value,
      product: this.product.nativeElement.value,
    };
    // console.log(newObj);

    this.proData.unshift(newObj);

    this.proName.nativeElement.value = '';
    this.proDesc.nativeElement.value = '';
    this.product.nativeElement.value = '';
  }
}
