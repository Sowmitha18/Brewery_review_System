import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { BreweryData } from 'data-type';
import { DetailComponent } from '../detail/detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchInput = "";
  breweryData! : BreweryData[];
  constructor(private router:Router,private auth:AuthService,private http:HttpClient,private _modalService : NgbModal){}
  ngOnInit(): void {
   
  }
  search(){
    const searchCriteria = document.getElementById("search-criteria") as any;
    switch(searchCriteria.value){
    case "name":
      this.auth.searchByName(this.searchInput).subscribe((response)=>{
        if(response){
          this.breweryData = response;
        }
      })
      break;
    case "city":
      this.auth.searchByCity(this.searchInput).subscribe((response)=>{
        if(response){
          this.breweryData = response;
        }
      })
      break;
      case "type":
      this.auth.searchBytype(this.searchInput).subscribe((response)=>{
        if(response){
          this.breweryData = response;
        }
      })
      break;
    }
  }
  openDetails(data : BreweryData){
      const modalRef = this._modalService.open(DetailComponent, {
        size: "lg",
        backdrop: "static",
        keyboard: true,
      });
      const componentInstance = modalRef.componentInstance as DetailComponent;
      componentInstance.breweryData = data;
    }
}

