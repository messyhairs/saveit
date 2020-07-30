import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpudatestoryComponent } from './upudatestory.component';

describe('UpudatestoryComponent', () => {
  let component: UpudatestoryComponent;
  let fixture: ComponentFixture<UpudatestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpudatestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpudatestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
