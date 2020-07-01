import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-adm-add',
  templateUrl: './adm-add.component.html',
  styleUrls: ['./adm-add.component.scss']
})
export class AdmAddComponent implements OnInit {

  constructor(public mainService: MainService) { }

  newProduct = {
    thumbnail: '',
    title: '',
    price: '',
    category: ''
  };

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.mainService.getProducts(this.mainService.productsRequest);
  }

}
