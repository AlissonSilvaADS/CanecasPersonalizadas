import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaturasComponent } from './caricaturas.component';

describe('CaricaturasComponent', () => {
  let component: CaricaturasComponent;
  let fixture: ComponentFixture<CaricaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
