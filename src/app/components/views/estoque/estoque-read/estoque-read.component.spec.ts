import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueReadComponent } from './estoque-read.component';

describe('EstoqueReadComponent', () => {
  let component: EstoqueReadComponent;
  let fixture: ComponentFixture<EstoqueReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueReadComponent]
    });
    fixture = TestBed.createComponent(EstoqueReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
