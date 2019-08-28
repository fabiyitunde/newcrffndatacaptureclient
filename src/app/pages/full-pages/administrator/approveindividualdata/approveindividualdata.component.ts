import { Component, OnInit, ViewChild } from "@angular/core";
import { ApproveIndividualDataService } from "./approveindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-approveindividualdata",
  templateUrl: "./approveindividualdata.component.html",
  styleUrls: ["./approveindividualdata.component.scss"],
  providers: [ApproveIndividualDataService]
})
export class ApproveindividualdataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};
  state: any = {};
  lga: any = {};
  DOB: string;
  title: any = {};
  imageUrl: string;

  constructor(
    private service: ApproveIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service.getindividualdata(this.recordid).subscribe(result => {
        this.item = result;
        this.category = this.item.category;
        this.state = this.item.state;
        this.lga = result.lga;
        this.title = this.item.title;
        this.DOB = this.item.dateofbirth
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-");

        console.log(this.item);
      });
    });
    this.imageSwap();
  }
  imageSwap() {
    if (this.item.passportphotograph != null) {
      this.imageUrl = this.item.passportphotograph;
    } else this.imageUrl = "assets/img/Portrait_Placeholder.png";
  }
  return() {
    if (window.confirm("Are you sure you want to return this Record?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.returnrecord(this.data).subscribe(result => {
        alert("Practitioner Detail Returned SuccessFully");
        this.back();
      });
    }
  }

  approve() {
    if (window.confirm("Are you sure you want to Approve?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.approverecord(this.data).subscribe(result => {
        alert("Practitioner detail Approved SuccessFully");
        this.back();
      });
    }
  }

  back() {
    this.router.navigate(["administrator/unapprovedindividuallist"]);
  }
}
