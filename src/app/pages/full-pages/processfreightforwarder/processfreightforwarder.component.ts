import { Component, OnInit, ViewChild} from '@angular/core';
import {ProcessfreightgforwarderService} from './processfreightforwarder.service'
import { Provider } from '@angular/compiler/src/compiler_facade_interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'app-processfreightforwarder',
  templateUrl: './processfreightforwarder.component.html',
  styleUrls: ['./processfreightforwarder.component.scss'],
  providers: [ProcessfreightgforwarderService]
})



export class ProcessfreightforwarderComponent implements OnInit {
  recordid: any;
  data: any ={};
 
 
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private service: ProcessfreightgforwarderService, private router: Router, private route: ActivatedRoute) { 

   
  }
  ngOnInit() {
    

  this.route.params.subscribe(params => {
    this.recordid = params['id'];
    console.log(this.recordid);
     this.service.getfreightforwardersdetail(this.recordid).subscribe(result => {

     this.data = result;

   })
  })

  }
  

  
  
  submit(id:any){
    console.log(id)
    //this.router.navigate(['shared/home/recorddetail',id]);
  }
 

  

}
