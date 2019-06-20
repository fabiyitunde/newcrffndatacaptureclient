import { Component, OnInit, ViewChild } from "@angular/core";
import { CreateIndividualDataService } from "./createindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-createindividualdata",
  templateUrl: "./createindividualdata.component.html",
  styleUrls: ["./createindividualdata.component.scss"],
  providers: [CreateIndividualDataService]
})
export class CreateindividualdataComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};
  lgalist: any = [];
  statelist: any = [];
  surname: string;
  othernames: string;

  constructor(
    private service: CreateIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
      this.service
        .getfreightforwardersdetail(this.recordid)
        .subscribe(result => {});
    });

    this.service.getindividualissuedcertificatelist().subscribe(result => {
      result.filter(obj => {
        obj._id === this.recordid;
        this.item = obj;
        this.surname = this.item.name.split(" ").slice(0, 1);
        this.othernames = this.item.name.split(" ").slice(1, 3);
        this.category = obj.category;
        return obj;
      });
    });
    this.service.getstatelist().subscribe(result => {
      this.statelist = result;
    });
  }
  onChangeEvent(ev) {
    this.service.getlgalist(ev.target.value).subscribe(result => {
      this.lgalist = result;
    });
  }
  submit() {
    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
    this.data.surname = this.surname;
    this.data.othernames = this.othernames;
    this.data.membershipnumber = this.item.membershipnumber;
    this.data.category = this.item.category;

    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Created SuccessFully");
    });
  }
  back() {
    this.router.navigate(["pages/individualissuedcertificatelist"]);
  }
}
