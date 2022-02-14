import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userInfo = this.authService.getUserInfo();

  theme: Theme = 'light-theme';

  constructor(
    private authService: AuthService,
    private router: Router,

    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void => 
    this.renderer.addClass(this.document.body, this.theme);

  logout(){
    this.authService.logout();

    this.router.navigate(['/inicio']);
  }

}

export type Theme = 'light-theme' | 'dark-theme';
