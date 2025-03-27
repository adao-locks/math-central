import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}], {relativeTo: this.route.parent});
  }
}
