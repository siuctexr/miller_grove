import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as esri from 'esri-leaflet';
import * as L from 'leaflet';

import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';
import { LeafletMapService } from '../leaflet.service';
import { NgElement, WithProperties } from '@angular/elements';
import { MarkerPopupComponent } from '../marker-popup/marker-popup.component';

import { Location } from '@angular/common';

@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.component.html',
  styleUrls: ['./tour-map.component.scss']
})
export class TourMapComponent implements OnInit {

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: L.latLng(37.57212630857369, -88.61823227881492)
  };

  markers: Layer[] = [];

  constructor(public _leafletSvc: LeafletMapService, private location: Location) { }

  ngOnInit(): void {
    const newMarker = marker(
      [37.498993 + 0.1 * (Math.random() - 0.5), -88.8723997 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );

    // .bindPopup(lr => {
    //   const popupEl: NgElement & WithProperties<MarkerPopupComponent> = document.createElement('popup-element') as any;
    // });

    this.markers.push(newMarker);
  }

  goBack() {
    this.location.back();
  }

  public onMapReady(map: L.Map) {

    console.log('Hey map ready called');
    // map is now loaded, add custom controls, access the map directly here
    // let popup = this.createPopupComponentWithMessage('Test popup!');

    // const markera = new L.CircleMarker(L.latLng(37.498993 + 0.1 * (Math.random() - 0.5), -88.8723997 + 0.1 * (Math.random() - 0.5)), {
    //   color: 'green',
    //   radius: 1,
    // });

    const markera = marker(
      [37.57212630857369 + 0.1 * (Math.random() - 0.5), -88.61823227881492 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [35, 51],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );
    markera.bindPopup(fl => this.createPopupComponentWithMessage('Site 1'));
    markera.addTo(map);

    const markerb = marker(
      [37.57212630857369 + 0.1 * (Math.random() - 0.5), -88.61823227881492 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [35, 51],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );
    markerb.bindPopup(fl => this.createPopupComponentWithMessage('Site 2'));
    markerb.addTo(map);

    const markerc = marker(
      [37.57212630857369 + 0.1 * (Math.random() - 0.5), -88.61823227881492 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [35, 51],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );
    markerc.bindPopup(fl => this.createPopupComponentWithMessage('Site 3'));
    markerc.addTo(map);

    const markerd = marker(
      [37.57212630857369 + 0.1 * (Math.random() - 0.5), -88.61823227881492 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [35, 51],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );
    markerd.bindPopup(fl => this.createPopupComponentWithMessage('Site 4'));
    markerd.addTo(map);

  }

  public createPopupComponentWithMessage(message: any) {
    const popupEl: NgElement & WithProperties<MarkerPopupComponent> = document.createElement('popup-element') as any;
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    popupEl.message = message;
    // Add to the DOM
    document.body.appendChild(popupEl);
    return popupEl;
  }

}
