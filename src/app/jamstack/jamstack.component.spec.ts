import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JamstackComponent } from './jamstack.component';

describe('WorkComponent', () => {
  let component: JamstackComponent;
  let fixture: ComponentFixture<JamstackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [JamstackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
