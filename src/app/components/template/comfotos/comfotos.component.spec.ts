import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfotosComponent } from './comfotos.component';

describe('ComfotosComponent', () => {
  let component: ComfotosComponent;
  let fixture: ComponentFixture<ComfotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
