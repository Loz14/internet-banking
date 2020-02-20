import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoCadastroComponent } from './modal-no-cadastro.component';

describe('ModalNoCadastroComponent', () => {
  let component: ModalNoCadastroComponent;
  let fixture: ComponentFixture<ModalNoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
