import { Component, OnInit, ViewChild } from "@angular/core";
import { EditCorporateDataService } from "./editcorporatedata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-editcorporatedata",
  templateUrl: "./editcorporatedata.component.html",
  styleUrls: ["./editcorporatedata.component.scss"],
  providers: [EditCorporateDataService]
})
export class EditcorporatedataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  category: any = {};
  stateObject: any = {};
  statelist: any = [];
  surname: string;
  othernames: string;

  constructor(
    private service: EditCorporateDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
    });

    this.service.getcorporatedatabyid(this.recordid).subscribe(result => {
      console.log(result);
      this.item = result;
      this.category = result.category;
      this.stateObject = result.state;
    });
    this.service.getstatelist().subscribe(result => {
      this.statelist = result;
    });
  }
  checkOperation() {
    this.data.isOperatingAtAirPort = this.data.isOperatingAtAirPort || false;
    this.data.isOperatingAtLandBorder =
      this.data.isOperatingAtLandBorder || false;
    this.data.isOperatingAtSeaPort = this.data.isOperatingAtSeaPort || false;
  }

  update() {
    console.log(this.item);
    this.checkOperation();
    this.item.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.item.mongo_id = this.recordid;
    // this.item.companyname = this.item.name;

    // this.data.membershipnumber = this.item.membershipnumber;
    // this.data.category = this.item.category;

    this.service.updaterecord(this.item).subscribe(result => {
      alert("Record Updated SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/unsubmittedcorporatedatalist"]);
  }
}
