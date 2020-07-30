import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstoryComponent } from './getstory.component';

describe('GetstoryComponent', () => {
  let component: GetstoryComponent;
  let fixture: ComponentFixture<GetstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
