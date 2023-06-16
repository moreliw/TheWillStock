import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputMask } from 'inputmask';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  mask(): void {
    const phoneInput = document.getElementById('custo');
    const inputMask = new InputMask({ mask: 'R$ 00,00' });
    inputMask.mask(phoneInput);
  }
}
