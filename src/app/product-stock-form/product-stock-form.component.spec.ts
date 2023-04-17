import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStockFormComponent } from './product-stock-form.component';

describe('ProductStockFormComponent', () => {
  let component: ProductStockFormComponent;
  let fixture: ComponentFixture<ProductStockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStockFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
