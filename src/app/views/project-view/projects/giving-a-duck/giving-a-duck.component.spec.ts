import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingADuckComponent } from './giving-a-duck.component';

describe('GivingADuckComponent', () => {
  let component: GivingADuckComponent;
  let fixture: ComponentFixture<GivingADuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GivingADuckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivingADuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
