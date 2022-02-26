import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EffectLoaderService } from 'src/app/services/effect-loader.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  userInfo = this.authService.getUserInfo();

  constructor(
    private authService: AuthService,
    private router: Router,

    private effectLoaderService: EffectLoaderService
  ) { }

  ngOnInit(): void {
    this.effectLoaderService.cargarEfecto(['inicio-parallax']);
    this.effectLoaderService.cargarEfecto(['scroll-circle']);
    this.effectLoaderService.cargarEfecto(['play&pause']);
    this.effectLoaderService.cargarEfecto(['popUp']);
  }

  goToBookList(){
    this.router.navigate(['/book-list']);
  }

}
