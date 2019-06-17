import { Component, OnInit, ViewChild } from "@angular/core";
import { EditIndividualDataService } from "./editindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-editindividualdata",
  templateUrl: "./editindividualdata.component.html",
  styleUrls: ["./editindividualdata.component.scss"],
  providers: [EditIndividualDataService]
})
export class EditindividualdataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  category: any = {};
  stateObject: any = {};
  statelist: any = [];
  lgalist: any = [];
  surname: string;
  othernames: string;

  constructor(
    private service: EditIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
    });

    this.service.getindividualdatabyid(this.recordid).subscribe(result => {
      this.item = result;
      this.category = result.category;
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
  onChangeEvent(ev) {
    this.service.getlgalist(ev.target.value).subscribe(result => {
      this.lgalist = result;
    });
  }

  update() {
    console.log(this.item);
    this.checkOperation();
    this.item.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;

    this.item.mongo_id = this.recordid;

    this.service.updaterecord(this.item).subscribe(result => {
      alert("Record Updated SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/unsubmittedindividualdatalist"]);
  }
}
