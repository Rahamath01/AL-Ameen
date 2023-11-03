import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsComponent } from './nuts.component';

describe('NutsComponent', () => {
  let component: NutsComponent;
  let fixture: ComponentFixture<NutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutsComponent]
    });
    fixture = TestBed.createComponent(NutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
