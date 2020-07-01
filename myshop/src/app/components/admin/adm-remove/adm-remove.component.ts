import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-adm-remove',
  templateUrl: './adm-remove.component.html',
  styleUrls: ['./adm-remove.component.scss']
})
export class AdmRemoveComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.mainService.getProducts(this.mainService.productsRequest);
  }

}
