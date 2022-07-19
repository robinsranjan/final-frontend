import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostpaidplanComponent } from './addpostpaidplan.component';

describe('AddpostpaidplanComponent', () => {
  let component: AddpostpaidplanComponent;
  let fixture: ComponentFixture<AddpostpaidplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpostpaidplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpostpaidplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
