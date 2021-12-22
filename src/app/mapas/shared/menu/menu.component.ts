import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menuItem: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen',
    },
    {
      ruta: '/mapas/zoomrange',
      nombre: 'Zoom Range',
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades',
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores',
    },
  ];
}
