import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThree2Component } from './new-three2.component';

describe('NewThree2Component', () => {
  let component: NewThree2Component;
  let fixture: ComponentFixture<NewThree2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThree2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThree2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
