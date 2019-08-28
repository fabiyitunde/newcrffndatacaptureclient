import { Component, OnInit, ViewChild } from "@angular/core";
import { SubmitIndividualDataService } from "./submitindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-submitindividualdata",
  templateUrl: "./submitindividualdata.component.html",
  styleUrls: ["./submitindividualdata.component.scss"],
  providers: [SubmitIndividualDataService]
})
export class SubmitindividualdataComponent implements OnInit {
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
    private service: SubmitIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service.getindividualdata(this.recordid).subscribe(result => {
        this.item = result;
        this.category = this.item.category;
        this.title = this.item.title;
        this.DOB = this.item.dateofbirth
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-");

        this.state = this.item.state;
        this.lga = this.item.lga;
        console.log(this.item);
      });
      this.imageSwap();
    });
  }
  imageSwap() {
    if (this.item.passportphotograph != null) {
      this.imageUrl = this.item.passportphotograph;
    } else this.imageUrl = "assets/img/Portrait_Placeholder.png";
  }
  submit() {
    if (window.confirm("Are you sure you want to Submit?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.submitrecord(this.data).subscribe(result => {
        alert("Practitioner detail Submitted SuccessFully");
        this.back();
      });
    }
  }
  edit(id: any) {
    this.router.navigate(["pages/editindividualdata", id]);
  }
  back() {
    this.router.navigate(["pages/unsubmittedindividualdatalist"]);
  }
}
