import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  // Color === true | White
  // Color === false | Black
  @Input("color") decidedColor : any;
  @Input("displayType") Position : any;


  styling: string = "white";
  positioning: string = "static";

  ngOnInit() {
    this.colorPicker()
    // this.positionPicker()
    console.log(this.decidedColor);
    
  }
  
  colorPicker(){
    if (this.decidedColor == true){
      this.styling = "white"
      this.positioning = "fixed"
    }
    else {
      this.styling = "black"
    }
  }

    // positionFixed(){
    //   if (this.Position !== "true") {
    //     change ccs class from position fixed  into commented
    //   }
    //   else {  }
    // }
}
