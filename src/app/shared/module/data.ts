// // second option>> enums
// export enum ProductCatalog {
//   PRODUCT = 'product',
//   CATLOG = 'catlog',
// }

// export interface Idata {
//   proName: string;
//   proDesc: string;
//   //data>> as a value>>type literal
//   // two types combining so it called as union of literals
//   // product: 'product' | 'catlog';
//   product: ProductCatalog;
// }

export enum ProductCatalog {
  PRODUCT = 'product',
  CATLOG = 'catlog',
}

export interface Idata {
  proName: string;
  proDesc: string;
  product: ProductCatalog;
}
