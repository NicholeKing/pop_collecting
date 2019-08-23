import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPopComponent } from './new-pop.component';

describe('NewPopComponent', () => {
  let component: NewPopComponent;
  let fixture: ComponentFixture<NewPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
