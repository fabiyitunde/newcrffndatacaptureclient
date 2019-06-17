import { Component, OnInit, ViewChild } from "@angular/core";
import { UpdateIndividualDataService } from "./updateindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-updateindividualdata",
  templateUrl: "./updateindividualdata.component.html",
  styleUrls: ["./updateindividualdata.component.scss"],
  providers: [UpdateIndividualDataService]
})
export class UpdateindividualdataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};

  constructor(
    private service: UpdateIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
      console.log(this.recordid);
      this.service
        .getfreightforwardersdetail(this.recordid)
        .subscribe(result => {});
    });

    this.service.getindividualissuedcertificatelist().subscribe(result => {
      result.filter(obj => {
        obj._id === this.recordid;
        console.log(obj);
        this.item = obj;
        this.category = obj.category;
        return obj;
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
      alert("Record Updated SuccessFully");
    });
  }
  back() {
    this.router.navigate(["pages/individualforwarderslist"]);
  }
}
