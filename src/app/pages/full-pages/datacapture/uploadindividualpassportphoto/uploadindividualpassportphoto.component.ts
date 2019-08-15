import { Component, OnInit, ViewChild } from "@angular/core";
import { SubmitIndividualDataService } from "../submitindividualdata/submitindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-uploadindividualpassportphoto",
  templateUrl: "./uploadindividualpassportphoto.component.html",
  styleUrls: ["./uploadindividualpassportphoto.component.scss"],
  providers: [SubmitIndividualDataService]
})
export class UploadIndividualPassportPhotoComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};
  //state: any = {};//
  //lga: any = {};

  constructor(
    private service: SubmitIndividualDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
      //console.log("Practitioner detail Submitted SuccessFully");
      this.service.getindividualdata(this.recordid).subscribe(result => {
        this.item = result;
        this.category = this.item.category;
        console.log(this.item);
      });
    });
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
