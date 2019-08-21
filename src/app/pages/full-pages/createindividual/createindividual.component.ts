import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CreateIndividualService } from "./createindividual.service";
@Component({
  selector: "app-createindividual",
  templateUrl: "./createindividual.component.html",
  styleUrls: ["./createindividual.component.scss"],
  providers: [CreateIndividualService]
})
export class CreateindividualComponent implements OnInit {
  recordid: any;
  data: any = {};
  constructor(
    private service: CreateIndividualService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
  submit() {
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Saved SuccessFully");
      this.data.firstname = "";
      this.data.middlename = "";
      this.data.surname = "";
      this.data.membershipnumber = "";
    });
  }
  back() {
    this.router.navigate(["pages/home"]);
  }
}
