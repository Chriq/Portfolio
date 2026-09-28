import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickYourPoisonComponent } from './pick-your-poison.component';

describe('PickYourPoisonComponent', () => {
  let component: PickYourPoisonComponent;
  let fixture: ComponentFixture<PickYourPoisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickYourPoisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickYourPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
