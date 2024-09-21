import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliverystaffget',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './deliverystaffget.component.html',
  styleUrl: './deliverystaffget.component.css'
})
export class DeliverystaffgetComponent {
  data:any[]=[];
  constructor(private apiser:ApiService,private router:Router)
  {

  }

  ngOnInit():void{
    this.apiser.get().subscribe(
      (response)=>{
        this.data=response;
      }
    );
  }
  editAccount(id:number): void {
      this.router.navigate(['/deliverystaffput',id]);
  }
  deleteCustomer(id:number){
      this.router.navigate(['/deliverystaffdelete',id])
  }

  home(){
    this.router.navigate(['/adminlogin'])
  }
}
