import { Component, OnInit } from '@angular/core';
import { EffectLoaderService } from './services/effect-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  title = 'books';

  constructor(
    private effectLoaderService: EffectLoaderService
  ) { }

  ngOnInit(): void {
    this.effectLoaderService.cargarEfecto(['popUp']);
  }

}
