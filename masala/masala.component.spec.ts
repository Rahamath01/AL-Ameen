import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasalaComponent } from './masala.component';

describe('MasalaComponent', () => {
  let component: MasalaComponent;
  let fixture: ComponentFixture<MasalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasalaComponent]
    });
    fixture = TestBed.createComponent(MasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
