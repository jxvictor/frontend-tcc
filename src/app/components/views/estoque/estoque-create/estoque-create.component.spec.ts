import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCreateComponent } from './estoque-create.component';

describe('EstoqueCreateComponent', () => {
  let component: EstoqueCreateComponent;
  let fixture: ComponentFixture<EstoqueCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueCreateComponent]
    });
    fixture = TestBed.createComponent(EstoqueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
