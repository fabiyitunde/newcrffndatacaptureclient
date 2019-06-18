import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdministratorComponent } from "./administrator.component";
import { AdministratorRoutingModule } from "./administrator-routing";
import { ChartistModule } from "ng-chartist";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DataTablesModule } from "../../../data-tables/data-tables.module";
import { UnapprovedcertificateregisterlistComponent } from "./unapprovedcertificateregisterlist/unapprovedcertificateregisterlist.component";
import { UnissuedcertificatelistComponent } from "./unissuedcertificatelist/unissuedcertificatelist.component";
import { ApprovecertificateregisterdetailComponent } from "./approvecertificateregisterdetail/approvecertificateregisterdetail.component";
import { ApproveindividualdataComponent } from "./approveindividualdata/approveindividualdata.component";
import { ApprovecorporatedataComponent } from "./approvecorporatedata/approvecorporatedata.component";
import { UnapprovedcorporatelistComponent } from "./unapprovedcorporatelist/unapprovedcorporatelist.component";
import { UnapprovedindividuallistComponent } from "./unapprovedindividuallist/unapprovedindividuallist.component";
import { CorporateissuedcertificatelistComponent } from "./corporateissuedcertificatelist/corporateissuedcertificatelist.component";
import { IndividualissuedcertificatelistComponent } from "./individualissuedcertificatelist/individualissuedcertificatelist.component";
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ChartistModule,
    AgmCoreModule,
    DataTablesModule,
    NgxDatatableModule,
    AdministratorRoutingModule,
    NgbModule
  ],
  declarations: [
    AdministratorComponent,
    UnapprovedcertificateregisterlistComponent,
    UnissuedcertificatelistComponent,
    ApprovecertificateregisterdetailComponent,
    ApprovecorporatedataComponent,
    ApproveindividualdataComponent,
    UnapprovedcorporatelistComponent,
    UnapprovedindividuallistComponent,
    CorporateissuedcertificatelistComponent,
    IndividualissuedcertificatelistComponent,
    CreateuserComponent
  ],
  providers: [],
  entryComponents: []
})
export class AdministratorModule {}
