import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaeComponent } from './mae.component';

describe('MaeComponent', () => {
  let component: MaeComponent;
  let fixture: ComponentFixture<MaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
