import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaModalComponent } from './janela-modal.component';

describe('JanelaModalComponent', () => {
  let component: JanelaModalComponent;
  let fixture: ComponentFixture<JanelaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanelaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanelaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
