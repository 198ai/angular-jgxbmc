import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  ngOnInit() {
    //页面刷新就会触发
    console.log('傻逼');
    this.set(1,20);
    let button:any= document.getElementById("button");
    console.log(button.innerHTML);//取值
  }
  set(key:any,value:any){ localStorage.setItem(key,JSON.stringify(value))
}
  share() {
    window.alert('The product has been shared!');
  }
  keyUp(e: any) {
    console.log(e.target.value);
  }
  public keyword!: string;
  get() {
    console.log(this.keyword);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
