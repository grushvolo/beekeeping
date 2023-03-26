import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyItemComponent } from '../family-item/family-item.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [CommonModule, FamilyItemComponent, MatCardModule],
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent {
  public families = []
}
