import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAdd } from './prod-add';

describe('ProdAdd', () => {
  let component: ProdAdd;
  let fixture: ComponentFixture<ProdAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
