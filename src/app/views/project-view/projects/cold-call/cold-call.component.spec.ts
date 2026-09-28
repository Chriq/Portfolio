import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdCallComponent } from './cold-call.component';

describe('ColdCallComponent', () => {
  let component: ColdCallComponent;
  let fixture: ComponentFixture<ColdCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
