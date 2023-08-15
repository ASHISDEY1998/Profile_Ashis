import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerProjPageComponent } from './career-proj-page.component';

describe('CareerProjPageComponent', () => {
  let component: CareerProjPageComponent;
  let fixture: ComponentFixture<CareerProjPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerProjPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerProjPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
