import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIconeComponent } from './lista-icone.component';

describe('ListaIconeComponent', () => {
  let component: ListaIconeComponent;
  let fixture: ComponentFixture<ListaIconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIconeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
