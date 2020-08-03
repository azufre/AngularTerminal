import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoletoComponent } from './create-boleto.component';

describe('CreateBoletoComponent', () => {
  let component: CreateBoletoComponent;
  let fixture: ComponentFixture<CreateBoletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
