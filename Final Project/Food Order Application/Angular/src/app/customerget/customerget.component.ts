import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customerget',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customerget.component.html',
  styleUrl: './customerget.component.css'
})
export class CustomergetComponent {
  data: any[] = [];
  filteredData: any[] = [];
  selectedRole: string = '';

  constructor(private apiser: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiser.get().subscribe(
      (response) => {
        this.data = response;
        this.filterData();  // Initialize with filtered data
      }
    );
  }

  filterData(): void {
    if (this.selectedRole) {
      this.filteredData = this.data.filter(item => item.role === this.selectedRole);
    } else {
      this.filteredData = [...this.data];  // Show all data if no role is selected
    }
  }

  editAccount(id: number): void {
    this.router.navigate(['/customerput', id]);
  }

  deleteCustomer(id: number): void {
    this.router.navigate(['/customerdelete', id]);
  }

  home(): void {
    this.router.navigate(['/adminlogin']);
  }

  onRoleChange(): void {
    this.filterData();  // Filter data when role changes
  }
}
