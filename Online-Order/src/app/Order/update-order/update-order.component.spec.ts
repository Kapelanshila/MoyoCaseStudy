import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderComponent } from './update-order.component';

describe('UpdaeOrderComponent', () => {
  let component: UpdateOrderComponent;
  let fixture: ComponentFixture<UpdateOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});