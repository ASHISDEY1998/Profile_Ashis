import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpComponent } from './editexp.component';

describe('EditexpComponent', () => {
  let component: EditexpComponent;
  let fixture: ComponentFixture<EditexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
