import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDeleteComponent } from './estoque-delete.component';

describe('EstoqueDeleteComponent', () => {
  let component: EstoqueDeleteComponent;
  let fixture: ComponentFixture<EstoqueDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueDeleteComponent]
    });
    fixture = TestBed.createComponent(EstoqueDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
