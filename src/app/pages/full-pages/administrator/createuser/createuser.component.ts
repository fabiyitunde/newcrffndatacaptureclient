import { Component, OnInit, ViewChild } from "@angular/core";
import { CreateUserService } from "./createuser.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-createuser",
  templateUrl: "./createuser.component.html",
  styleUrls: ["./createuser.component.scss"],
  providers: [CreateUserService]
})
export class CreateuserComponent implements OnInit {
  recordid: any;
  data: any = {};

  constructor(
    private service: CreateUserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
    });
  }

  submit() {
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.service.createuser(this.data).subscribe(result => {
      alert("User Created SuccessFully");
    });
  }
}
