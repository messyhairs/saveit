import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfullstoryComponent } from './readfullstory.component';

describe('ReadfullstoryComponent', () => {
  let component: ReadfullstoryComponent;
  let fixture: ComponentFixture<ReadfullstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfullstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfullstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
