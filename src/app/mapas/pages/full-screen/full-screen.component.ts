import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
  #mapa {
    width: 100%;
    height: 100%;
  }
  `],
})


export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-118.32167000002767, 34.13406837496395],
      zoom: 18,

    });
  }
}
