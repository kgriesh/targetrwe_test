import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './addproduct.component.html'
})

export class ProductComponent {
  
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    ) { }

  submit(product: any){
    this.dataService.sendPostRequest(product)
  }

  clearForm(userForm: NgForm) {
    userForm.reset()
  }
}