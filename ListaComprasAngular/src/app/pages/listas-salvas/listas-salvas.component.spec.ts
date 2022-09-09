import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasSalvasComponent } from './listas-salvas.component';

describe('ListasSalvasComponent', () => {
  let component: ListasSalvasComponent;
  let fixture: ComponentFixture<ListasSalvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasSalvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasSalvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
