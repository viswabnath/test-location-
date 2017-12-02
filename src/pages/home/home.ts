import { Component, ViewChild, ElementRef } from '@angular/core'; // Added  ViewChild, ElementRef
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'; // Newly Added


 
declare var google; // Added
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef; // Added
  map: any; // Added
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) { // Added public geolocation: Geolocation
 
  }
 
  ionViewDidLoad() { // Added this function to loadMap 
    this.loadMap();
  }
  
  
//home.ts File
  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }
 
  addMarker() { // To Add Marker
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h3>My New Location!</h3><h5></h5>";
    this.addInfoWindow(marker, content);
  }
 
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
  
 
} 