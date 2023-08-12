import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillpageComponent } from './skillpage.component';

describe('SkillpageComponent', () => {
  let component: SkillpageComponent;
  let fixture: ComponentFixture<SkillpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
