import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicasComponent } from './magicas.component';

describe('MagicasComponent', () => {
  let component: MagicasComponent;
  let fixture: ComponentFixture<MagicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
