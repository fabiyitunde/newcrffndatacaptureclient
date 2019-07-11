import { Component, OnInit, ViewChild } from "@angular/core";
import { CreateCorporateDataService } from "./createcorporatedata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-createcorporatedata",
  templateUrl: "./createcorporatedata.component.html",
  styleUrls: ["./createcorporatedata.component.scss"],
  providers: [CreateCorporateDataService]
})
export class CreatecorporatedataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  category: any = {};

  statelist: any = [];
  surname: string;
  othernames: string;

  constructor(
    private service: CreateCorporateDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
    });

    this.service.getcorporateissuedcertificatelist().subscribe(result => {
      result.filter(obj => {
        if (obj._id === this.recordid) {
          this.category = obj.category;
          this.item = obj;

          return obj;
        }
      });
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

  submit() {
    this.checkOperation();
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.data.companyname = this.item.name;

    this.data.membershipnumber = this.item.membershipnumber;
    this.data.category = this.item.category;

    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Created SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/corporateissuedcertificatelist"]);
  }
}
