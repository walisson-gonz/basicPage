import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/']);
  }

}

