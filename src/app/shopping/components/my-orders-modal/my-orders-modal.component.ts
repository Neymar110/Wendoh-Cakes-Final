import { Component, EventEmitter, Input, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order-service.service';

@Component({
  selector: 'my-orders-modal',
  templateUrl: './my-orders-modal.component.html',
  styleUrls: ['./my-orders-modal.component.css']
})
export class MyOrdersModalComponent {
  showMyDiv : boolean;
  orders$ : any;
  user$;
  thisorder;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input("order") order : Order;



  constructor(
    private authService : AuthService,
    private orderService : OrderService){

      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid).valueChanges()));
    }

  onClick(){
    this.showMyDiv = true
  }

  closeMe() {
    this.closeEvent.emit();
  }

}
