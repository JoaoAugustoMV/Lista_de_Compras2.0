import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoMercadoComponent } from './modo-mercado.component';

describe('ModoMercadoComponent', () => {
  let component: ModoMercadoComponent;
  let fixture: ComponentFixture<ModoMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoMercadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
