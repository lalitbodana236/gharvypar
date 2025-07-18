import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSectionComponent } from './left-section.component';

describe('LeftSectionComponent', () => {
  let component: LeftSectionComponent;
  let fixture: ComponentFixture<LeftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
