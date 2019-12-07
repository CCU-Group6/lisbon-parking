import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { style } from '@angular/animations';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';

  mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]
  public lat =  38.73674521461237;
  public lng =  -9.1386079788208;
  public bool = true;


  public Zones: Object = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "letter": "Alameda",
          "charge": "1.0",
          "color": "verde",
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -9.14339303970337,
                38.741816531043206
              ],
              [
                -9.142019748687744,
                38.739088441876866
              ],
              [
                -9.142320156097412,
                38.73898801942805
              ],
              [
                -9.142062664031982,
                38.7376657773492
              ],
              [
                -9.138543605804443,
                38.738134422911926
              ],
              [
                -9.137513637542725,
                38.73786662582405
              ],
              [
                -9.136676788330078,
                38.73739797850408
              ],
              [
                -9.133822917938232,
                38.73756535289994
              ],
              [
                -9.133329391479492,
                38.74210104967876
              ],
              [
                -9.139015674591064,
                38.74250272111668
              ],
              [
                -9.14339303970337,
                38.741816531043206
              ]
            ]
          ]
        }
      }
    ]
  };

  zoneData

  @Output() messageEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
    // var url = this.Zones
    // Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiaGxmZXJyZWlyYSIsImEiOiJjazN2aXloMHYwbWFyM21waWhoY255NzF1In0.Koj_fvIbCCUV4SQ48VL1qg');
    // this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: this.style,
    //     zoom: 16,
    //     center: [this.lng, this.lat]
    // });
    // // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());
    
    // this.map.addSource('zones', {
    //   "type": 'geojson',
    //   "data": "https://api.mapbox.com/datasets/v1/hlferreira/ck3vp0iu407jv2ip9y45z3gx5/?access_token=pk.eyJ1IjoiaGxmZXJyZWlyYSIsImEiOiJjazN2aXloMHYwbWFyM21waWhoY255NzF1In0.Koj_fvIbCCUV4SQ48VL1qg"
    // });
    
    // this.map.addLayer({
    //   "id": "zones",
    //   "type": "fill",
    //   "source": 'zones',
    //   "layout": {},
    //   "paint": {
    //     "fill-color": "#627BC1",
    //     "fill-opacity": ["case",
    //     ["boolean", ["feature-state", "hover"], false],
    //     1,
    //     0.5]
    //   }
    // });
    // console.log(this.map);
  }

  onZoneClick(event){
    this.zoneData = {
      "zoneTitle": event.feature.h.letter, 
      "zoneCharge": event.feature.h.charge, 
      "zoneColor": event.feature.h.color
    }
    console.log(this.zoneData);
    
    this.messageEvent.emit(this.zoneData);
  }

  onChoseLocation(event){
    console.log(event);
    
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }


  mapIdle() {
    console.log('idle');
  }
}
