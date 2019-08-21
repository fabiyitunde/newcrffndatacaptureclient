import { Component, OnInit } from "@angular/core";
import { CreateCorporateService } from "./createcorporate.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-createcorporate",
  templateUrl: "./createcorporate.component.html",
  styleUrls: ["./createcorporate.component.scss"],
  providers: [CreateCorporateService]
})
export class CreatecorporateComponent implements OnInit {
  constructor(
    private service: CreateCorporateService,
    private router: Router
  ) {}
  data: any = {};
  recordid: any;
  ngOnInit() {}
  submit() {
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Saved SuccessFully");
      this.data.membershipnumber = "";
      this.data.companyname = "";
    });
  }
  back() {
    this.router.navigate(["pages/home"]);
  }
}
