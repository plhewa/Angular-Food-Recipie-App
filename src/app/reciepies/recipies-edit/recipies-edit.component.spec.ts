import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesEditComponent } from './recipies-edit.component';

describe('RecipiesEditComponent', () => {
  let component: RecipiesEditComponent;
  let fixture: ComponentFixture<RecipiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
