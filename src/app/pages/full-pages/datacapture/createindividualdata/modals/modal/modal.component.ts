import {
  Component,
  NgZone,
  OnInit,
  Inject,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import { Subject } from "rxjs/Subject";

import { Router, ActivatedRoute } from "@angular/router";
import {
  NgbActiveModal,
  ModalDismissReasons,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  FormControl,
  FormControlName
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ModalService } from "./modal.service";
@Component({
  selector: "ngx-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./style.scss"],
  providers: [ModalService]
})
export class ModalComponent {
  @Input() crffnmasterid: number;
  @Input("membershipnumber") membershipnumber: any;
  uploadedpassport: File = null;
  passportphotograph: any;
  data: any = {};
  passportbase64: any;
  isFileuploader: boolean = true;
  isWebcam: boolean = false;
  uploadid: number;
  imagefile: string;
  aboutusitemtypeid: number;
  imageUrl: string = "assets/img/Portrait_Placeholder.png";
  public fileUploaderOptions: any = {};
  modalHeader: string;
  modalContent = ` `;
  spinner: boolean;
  uploadInProgress: boolean;
  uploadCompleted: boolean;
  @Output() getstafflist: EventEmitter<any> = new EventEmitter();
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {};
  public errors: WebcamInitError[] = [];
  constructor(
    private activeModal: NgbActiveModal,
    private service: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const forwarderID = +params["id"];

      this.crffnmasterid = forwarderID;
      this.uploadid = this.data.id;
    });

    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
  }

  handleFileInput(file: FileList) {
    this.uploadedpassport = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.uploadedpassport);
    reader.onloadend = () => {
      this.passportbase64 = reader.result;
    };
  }

  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();

  public triggerSnapshot(): void {
    this.trigger.next();
  }
  webcam() {
    this.isWebcam = true;
    this.isFileuploader = false;
    console.log(this.membershipnumber);
  }
  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.imageUrl = webcamImage.imageAsDataUrl;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log("active device: " + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  closeModal() {
    this.activeModal.close();
    this.spinner = false;
  }

  onSubmit() {
    this.spinner = true;
    this.uploadInProgress = true;

    this.data.membershipnumber = this.membershipnumber;
    this.data.passportphotograph =
      this.passportbase64 || this.webcamImage.imageAsBase64;
    this.service.saveUploadedPassportPhoto(this.data).subscribe(
      result => {
        //this.imageUrl = "assets/img/Portrait_Placeholder.png";
        this.uploadInProgress = false;
        this.uploadCompleted = true;
        this.spinner = false;
        this.isWebcam = false;
        this.isFileuploader = true;

        alert("File Uploaded Successfully");
      },

      completed => {
        this.uploadInProgress = false;
        this.uploadCompleted = true;
        this.spinner = false;

        alert(completed);
      }
    );

    //this.closeModal();
  }
}
