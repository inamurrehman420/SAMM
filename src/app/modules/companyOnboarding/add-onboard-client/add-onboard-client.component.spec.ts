import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnboardClientComponent } from './add-onboard-client.component';

describe('AddOnboardClientComponent', () => {
  let component: AddOnboardClientComponent;
  let fixture: ComponentFixture<AddOnboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnboardClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
