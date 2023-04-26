import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkLibComponent } from './wk-lib.component';

describe('WkLibComponent', () => {
  let component: WkLibComponent;
  let fixture: ComponentFixture<WkLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WkLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
