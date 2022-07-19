import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddongleplanComponent } from './adddongleplan.component';

describe('AdddongleplanComponent', () => {
  let component: AdddongleplanComponent;
  let fixture: ComponentFixture<AdddongleplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddongleplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddongleplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
