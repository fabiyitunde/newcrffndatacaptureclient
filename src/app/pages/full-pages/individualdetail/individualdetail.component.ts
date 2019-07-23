import { Component, OnInit, ViewChild } from "@angular/core";
import { IndividualdetailService } from "./individualdetail.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-individualdetail",
  templateUrl: "./individualdetail.component.html",
  styleUrls: ["./individualdetail.component.scss"],
  providers: [IndividualdetailService]
})
export class IndividualdetailComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  constructor(
    private service: IndividualdetailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
      console.log(this.recordid);
      this.service
        .getfreightforwardersdetail(this.recordid)
        .subscribe(result => {
          this.item = result;
        });
    });
  }

  submit() {
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
    this.data.mongo_id = this.recordid;
    this.data.name =
      this.item.surname +
      " " +
      this.item.firstname +
      " " +
      this.item.middlename;
    this.data.membershipnumber = this.item.membershipnumber;
    this.data.category = this.item.category;

    console.log(this.data);
    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Saved SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/individualforwarderslist"]);
  }
}
