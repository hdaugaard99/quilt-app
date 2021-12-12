import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiltsListComponent } from './quilts-list.component';

describe('QuiltsListComponent', () => {
  let component: QuiltsListComponent;
  let fixture: ComponentFixture<QuiltsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiltsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiltsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
