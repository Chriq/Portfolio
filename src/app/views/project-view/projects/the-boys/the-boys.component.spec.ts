import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBoysComponent } from './the-boys.component';

describe('TheBoysComponent', () => {
  let component: TheBoysComponent;
  let fixture: ComponentFixture<TheBoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBoysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
