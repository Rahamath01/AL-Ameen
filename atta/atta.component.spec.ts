import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttaComponent } from './atta.component';

describe('AttaComponent', () => {
  let component: AttaComponent;
  let fixture: ComponentFixture<AttaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttaComponent]
    });
    fixture = TestBed.createComponent(AttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
