import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebridadesComponent } from './celebridades.component';

describe('PerolasComponent', () => {
  let component: CelebridadesComponent;
  let fixture: ComponentFixture<CelebridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebridadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
