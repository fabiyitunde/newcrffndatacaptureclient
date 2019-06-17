import { Component, OnInit } from "@angular/core";
import { UpdateCorporateDataService } from "./updatecorporatedata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-updatecorporatedata",
  templateUrl: "./updatecorporatedata.component.html",
  styleUrls: ["./updatecorporatedata.component.scss"],
  providers: [UpdateCorporateDataService]
})
export class UpdatecorporatedataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  constructor(
    private service: UpdateCorporateDataService,
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
    this.data.name = this.item.surname + " " + this.item.firstname;
    this.data.membershipnumber = this.item.membershipnumber;
    this.data.category = this.item.category;

    console.log(this.data);
    this.service.saverecord(this.data).subscribe(result => {
      alert("Staff Saved SuccessFully");
    });
  }
  back() {
    this.router.navigate(["pages/individualforwarderslist"]);
  }
}
