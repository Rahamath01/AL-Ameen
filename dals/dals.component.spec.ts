import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalsComponent } from './dals.component';

describe('DalsComponent', () => {
  let component: DalsComponent;
  let fixture: ComponentFixture<DalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DalsComponent]
    });
    fixture = TestBed.createComponent(DalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
