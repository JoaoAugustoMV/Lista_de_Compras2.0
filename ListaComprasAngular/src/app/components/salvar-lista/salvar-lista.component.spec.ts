import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarListaComponent } from './salvar-lista.component';

describe('SalvarListaComponent', () => {
  let component: SalvarListaComponent;
  let fixture: ComponentFixture<SalvarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
