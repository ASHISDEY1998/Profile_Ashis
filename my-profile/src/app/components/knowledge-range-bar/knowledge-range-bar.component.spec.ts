import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeRangeBarComponent } from './knowledge-range-bar.component';

describe('KnowledgeRangeBarComponent', () => {
  let component: KnowledgeRangeBarComponent;
  let fixture: ComponentFixture<KnowledgeRangeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeRangeBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeRangeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
