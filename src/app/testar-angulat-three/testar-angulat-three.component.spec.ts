import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarAngulatTHREEComponent } from './testar-angulat-three.component';

describe('TestarAngulatTHREEComponent', () => {
  let component: TestarAngulatTHREEComponent;
  let fixture: ComponentFixture<TestarAngulatTHREEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestarAngulatTHREEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestarAngulatTHREEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
