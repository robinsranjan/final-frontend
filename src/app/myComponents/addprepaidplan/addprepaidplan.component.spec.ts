import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprepaidplanComponent } from './addprepaidplan.component';

describe('AddprepaidplanComponent', () => {
  let component: AddprepaidplanComponent;
  let fixture: ComponentFixture<AddprepaidplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprepaidplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprepaidplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
