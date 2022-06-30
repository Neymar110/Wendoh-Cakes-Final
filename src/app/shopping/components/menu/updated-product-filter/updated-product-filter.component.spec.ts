import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedProductFilterComponent } from './updated-product-filter.component';

describe('UpdatedProductFilterComponent', () => {
  let component: UpdatedProductFilterComponent;
  let fixture: ComponentFixture<UpdatedProductFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedProductFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
