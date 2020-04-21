import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { StoreService } from "../../services/store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class registerComponent {
  public data;
  constructor(private auth: AuthService, private router: Router, private store: StoreService) {}
  onSubmit(body) {
    console.log(body)
    this.auth.register(body).subscribe(data => {
      console.log(data)
      this.data = data;
      if (!!data) {
        this.store.create("token", data)
        this.router.navigate(["/posts"])
      }
    });
  }
}
