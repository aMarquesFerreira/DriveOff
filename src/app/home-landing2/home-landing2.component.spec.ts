import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLanding2Component } from './home-landing2.component';

describe('HomeLanding2Component', () => {
  let component: HomeLanding2Component;
  let fixture: ComponentFixture<HomeLanding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLanding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLanding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
