import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCreateEntradaComponent } from './estoque-create-entrada.component';

describe('EstoqueCreateEntradaComponent', () => {
  let component: EstoqueCreateEntradaComponent;
  let fixture: ComponentFixture<EstoqueCreateEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueCreateEntradaComponent]
    });
    fixture = TestBed.createComponent(EstoqueCreateEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
