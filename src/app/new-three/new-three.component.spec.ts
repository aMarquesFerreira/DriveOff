import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThreeComponent } from './new-three.component';

describe('NewThreeComponent', () => {
  let component: NewThreeComponent;
  let fixture: ComponentFixture<NewThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
