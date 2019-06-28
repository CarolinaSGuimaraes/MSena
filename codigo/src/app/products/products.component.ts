import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  constructor() { }


  listProducts() {
    this.products = [
    {
      id: "1",
      name:"Cloro",
      description: "",
      imagem: "",
      https: "www.google.com.br",
      price: "19.90"
    },
    {
      id: "2",
      name:"Filtro",
      description: "",
      imagem:"",
      https: "www.google.com.br",
      price: "29.90"
    },
    {
      id: "3",
      name:"Iluminação",
      description: "",
      imagem:"",
      https: "www.google.com.br",
      price: "59.90"
    },
    {
      id: "",
      name:"Iluminação",
      description: "",
      imagem:"",
      https: "www.google.com.br",
      price: "99.90"
    }

    ]
  }

  removeProduct(id) {
    let products = [];
    let updateProducts = [];
    const localProducts = localStorage.getItem('ls-products');
    products = JSON.parse(localProducts);

    // Filter and return all diff by id
    updateProducts = products.filter(item => item.id !== id);

    // Save on localstorage
    localStorage.setItem('ls-products', JSON.stringify(updateProducts));

    // Update table
    this.listProducts();
  }

  ngOnInit() {
    this.listProducts();
  }

}
