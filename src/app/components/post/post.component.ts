import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class postComponent implements OnInit {
  constructor(){}
  @Input() public data: any
  ngOnInit(){

  }
}