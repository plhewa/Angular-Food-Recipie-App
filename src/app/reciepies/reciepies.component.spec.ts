import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepiesComponent } from './reciepies.component';

describe('ReciepiesComponent', () => {
  let component: ReciepiesComponent;
  let fixture: ComponentFixture<ReciepiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciepiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
