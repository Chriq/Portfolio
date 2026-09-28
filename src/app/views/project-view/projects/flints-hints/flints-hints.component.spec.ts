import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlintsHintsComponent } from './flints-hints.component';

describe('FlintsHintsComponent', () => {
  let component: FlintsHintsComponent;
  let fixture: ComponentFixture<FlintsHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlintsHintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlintsHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
