import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  case1: string = "";
  case2: string = "";
  case3: string = "";
  inputChange(event: any): void {
    this.case1 += event.target.value + "|";
  }
  inputKeyUp(event: any): void {
    this.case2 += event.target.value + "|";
  }
  templateReferenceChange(value: String): void {
    this.case3 += value + "|";
  }
}
