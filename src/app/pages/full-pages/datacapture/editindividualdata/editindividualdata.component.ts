import { Component, OnInit, ViewChild, Output } from "@angular/core";
import { EditIndividualDataService } from "./editindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalComponent } from "../createindividualdata/modals/modal/modal.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
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
  @Output() membershipnumber: number;

  constructor(
    private service: EditIndividualDataService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
    });

    this.service.getindividualdatabyid(this.recordid).subscribe(result => {
      this.item = result;
      console.log(this.item);
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
  showSmallModal() {
    let membershipnumber = this.item.membershipnumber;
    const activeModal = this.modalService.open(ModalComponent, {
      ariaLabelledBy: "modal-basic-title"
    });
    (<ModalComponent>(
      activeModal.componentInstance
    )).membershipnumber = membershipnumber;

    this.membershipnumber = membershipnumber;
    console.log(membershipnumber);
    activeModal.componentInstance.modalHeader = "Upload Image";

    activeModal.result
      .then(result => {
        // this.getstafflist();
      })
      .catch(result => {
        console.log(result);
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
