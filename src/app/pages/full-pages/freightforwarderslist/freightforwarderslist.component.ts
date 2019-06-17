import { Component, OnInit, ViewChild} from '@angular/core';
import {FreightforwarderlistService} from './freightforwarderslist.service'
import { Provider } from '@angular/compiler/src/compiler_facade_interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'app-freightforwarderslist',
  templateUrl: './freightforwarderslist.component.html',
  styleUrls: ['./freightforwarderslist.component.scss'],
  providers:[ FreightforwarderlistService]
})
export class FreightforwarderslistComponent implements OnInit {
  rows = [];
  temp = [];
  columns = [
    { prop: 'name' },
    { prop: 'regid' },
    { prop: 'email' },
    { prop: 'category' },
    { prop: 'stateid' },
  
  ];@ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private service: FreightforwarderlistService, private router: Router, private route: ActivatedRoute) { 

   
  }
  ngOnInit() {
    this.service.getalllist().subscribe(result=>{
     
    this.temp = [...result];
        
    this.rows = result;
    console.log(this.rows);

    
        
  });
  }
  

  
  
  processFF(id:any){
    
    this.router.navigate(['pages/processfreightforwarder',id]);
  }
 

  updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function (d) {
          return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
  }


}




