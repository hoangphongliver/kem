
const Mapbox = {
    view: () => {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        mapboxgl.accessToken = 'pk.eyJ1IjoibmFtbGUiLCJhIjoiY2p1YXhoeXJ6MDN3YTQ0cXIyaHFmeDd0cCJ9.IjUYao8ekzV8YKvK4zncnQ';
        var map = new mapboxgl.Map({
            container: 'destination-map',
            style: 'mapbox://styles/namle/cjub1h6z21evg1frnwajplh69',
            center: [30.416,29.257],
            zoom: 2.1   
        });
        map.scrollZoom.disable();
        map.addControl(new mapboxgl.FullscreenControl());
        map.on('load', function () {
          map.addLayer({
            "id": "symbols",
            "type": "symbol",
            "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [-0.197705, 5.554524]
                    },
                    'properties': {
                      'title': 'KEMPINSKI HOTEL GOLD COAST CITY ACCRA',
                      'description': 'Kempinski Hotel Gold Coast City - Accra is the only five-star luxury hotel offering state of the art meeting facilities and services in the city.',
                      'img_cover': '../assets/images/hotel-1.jpg',
                      'location': 'Kempinski Hotel Gold Coast City Accra , Ministries, Gamel Abdul Nasser Avenue PMB 66, Ghana',
                      'phone': '+233 242 436000',
                      'website': 'https://www.kempinski.com/en/accra/hotel-gold-coast-city/'
                    }
                  },
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [-82.357957, 23.134421]
                    },
                    'properties': {
                      'title': 'GRAN HOTEL MANZANA KEMPINSKI LA HABANA',
                      'description': 'Ideally located in the heart of Old Havana, and surrounded by the main UNESCO World Heritage buildings of this vibrant city, the Gran Hotel Manzana Kempinski offers you the opportunity to relish in the first luxury hotel in Cuba.',
                      'img_cover': '../assets/images/hotel-1.jpg',
                      'location': 'Kempinski Hotel Gold Coast City Accra , Ministries, Gamel Abdul Nasser Avenue PMB 66, Ghana',
                      'phone': '+233 242 436000',
                      'website': 'http://www.kempinski.com/en/havana/gran-hotel-kempinski-la-habana/'
                    }
                  },
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [-5.107912, 36.436360]
                    },
                    'properties': {
                      'title': 'Kempinski Hotel Bahía',
                      'description': 'Welcome to Kempinski Hotel Bahía! ​ Choose from​ a wide range of​ different settings to dine, drink and enjoy our ​broad ​selection of ',
                      'img_cover': '../assets/images/hotel-1.jpg',
                      'location': 'Kempinski Hotel Bahía, Carretera de Cádiz Km 159, 29680 ESTEPONA Estepona, Spain',
                      'phone': '+34 95 280 9500',
                      'website': 'https://www.kempinski.com/en/marbella/hotel-bahia/'
                    }
                  }
                ]
              }
            },
            "layout": {
              'icon-image': "circle-15"
            },
            "paint": {
              'icon-color': '#2a2a2a'
            }
          })
          map.on('click', 'symbols', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var title = e.features[0].properties.title;
            var img_cover = e.features[0].properties.img_cover;
            var description = e.features[0].properties.description;
            var location = e.features[0].properties.location;
            var phone = e.features[0].properties.phone;
            var website = e.features[0].properties.website;
             
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
             
            new mapboxgl.Popup({ 
                offset: 25,
                anchor: 'bottom'
              })
              .setLngLat(coordinates)
              .setHTML(
                      '<div class=\"block-info\">' +
                        '<h1 class=\"info-title\">' + title + '</h1>' +
                        '<div class=\"info-content\">' +
                            '<div class=\"img-cover\">' +
                                '<img' + ' ' + 'src=\"' + img_cover + '\"' + ' ' + 'alt=\"hotel-1\"' + 'class=\"avatar\"' +'>' +
                            '</div>' +
                            '<div class=\"descripton\">' +
                                  '<p>' + description + '</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class=\"info-contact\">' +
                            '<div class=\"hotel-contact\">' +
                              '<div class=\"line location\">' +
                                  '<span class=\"icon icon-location\">' + '</span>' +
                                  '<span class=\"text text-location\">' + location + '</span>' +
                              '</div>' +
                              '<div class=\"line phone\">' +
                                  '<span class=\"icon icon-phone\">' + '</span>' +
                                  '<span class=\"text text-phone\">' + phone + '</span>' +
                              '</div>' +
                            '</div>' +
                            '<div class=\"hotel-link\">' +
                              '<a' + ' ' + 'href=\"'+ website + '\"' + ' ' + 'class=\"btn btn-default-outline btn-futher-info\"' + '>' + 'Visit Hotel' + '</a>' +
                            '</div>' +
                        '</div>' +
                      '</div>'
                    )
              .addTo(map);
            map.flyTo({
              center: [e.features[0].geometry.coordinates[0], e.features[0].geometry.coordinates[1] + 3 ],
              zoom: 5
            });
            });
            map.on('mouseenter', 'symbols', function () {
              map.getCanvas().style.cursor = 'pointer';
            });
              // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'symbols', function () {
              map.getCanvas().style.cursor = '';
            });
      });     
    }
}
export default Mapbox;
  