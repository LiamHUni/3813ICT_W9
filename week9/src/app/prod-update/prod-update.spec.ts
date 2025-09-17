import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUpdate } from './prod-update';

describe('ProdUpdate', () => {
  let component: ProdUpdate;
  let fixture: ComponentFixture<ProdUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
