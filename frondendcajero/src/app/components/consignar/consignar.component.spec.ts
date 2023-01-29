import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignarComponent } from './consignar.component';

describe('ConsignarComponent', () => {
  let component: ConsignarComponent;
  let fixture: ComponentFixture<ConsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
