import { Component, OnInit, ViewChild, Output } from "@angular/core";
import { CreateIndividualDataService } from "./createindividualdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalComponent } from "./modals/modal/modal.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
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
  photoItem: any = {};
  category: any = {};
  lgalist: any = [];
  statelist: any = [];
  titlelist: any = [];
  surname: string;
  othernames: string;
  closeResult: string;
  formCompleted: boolean = false;
  imageUrl: string;
  @Output() membershipnumber: number;
  constructor(
    private service: CreateIndividualDataService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.imageSwap();
    this.route.params.subscribe(params => {
      this.recordid = params["id"];
      this.service
        .getfreightforwardersdetail(this.recordid)
        .subscribe(result => {});
    });

    this.service.getindividualissuedcertificatelist().subscribe(result => {
      result.filter(obj => {
        if (obj._id === this.recordid) {
          this.item = obj;
          this.surname = this.item.name.split(" ").slice(0, 1);
          this.othernames = this.item.name.split(" ").slice(1, 3);
          this.category = obj.category;
          this.membershipnumber = obj.membershipnumber;
          // console.log(obj);
          this.service
            .getfreightforwardersdetail(this.membershipnumber)
            .subscribe(result => {
              // console.log(result);
              this.photoItem = result;
            });
          return obj;
        }
      });
    });
    this.getImage();
    this.service.getstatelist().subscribe(result => {
      this.statelist = result;
    });
    this.service.gettitlelist().subscribe(result => {
      this.titlelist = result;
    });
  }
  imageSwap() {
    if (this.photoItem.passportphotograph != null) {
      this.imageUrl = this.photoItem.passportphotograph;
    } else this.imageUrl = "assets/img/Portrait_Placeholder.png";
  }
  getImage() {
    this.service
      .getfreightforwardersdetail(this.recordid)
      .subscribe(result => {});
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

    this.service.saverecord(this.data).subscribe(
      result => {
        alert("Record saved");
        alert("Please Upload an Image");
        this.ngOnInit();
        this.formCompleted = true;
      },
      err => {
        alert(err);
        this.ngOnInit();
        this.formCompleted = true;
      }
    );
  }
  back() {
    this.router.navigate(["pages/individualissuedcertificatelist"]);
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

    activeModal.componentInstance.modalHeader = "Upload Image";

    activeModal.result
      .then(result => {
        this.ngOnInit();
        alert("Record Created SuccessFully Return To List");
      })
      .catch(result => {
        console.log(result);
      });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return "by pressing ESC";
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return "by clicking on a backdrop";
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
