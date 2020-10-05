import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesStartComponent } from './recipies-start.component';

describe('RecipiesStartComponent', () => {
  let component: RecipiesStartComponent;
  let fixture: ComponentFixture<RecipiesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
