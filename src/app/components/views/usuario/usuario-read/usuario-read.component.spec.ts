import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioReadComponent } from './usuario-read.component';

describe('UsuarioReadComponent', () => {
  let component: UsuarioReadComponent;
  let fixture: ComponentFixture<UsuarioReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioReadComponent]
    });
    fixture = TestBed.createComponent(UsuarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
