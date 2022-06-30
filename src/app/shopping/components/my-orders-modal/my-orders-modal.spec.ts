import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOrdersModalComponent } from "./my-orders-modal.component"

describe('NewMyOrdersComponent', () => {
  let component: MyOrdersModalComponent;
  let fixture: ComponentFixture<MyOrdersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrdersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
