/*
* Admin panel.
* Load map for checking icon offset.
* (Панель администратора. Загрузить карту для проверки смещения иконки.)
*/

djeymYMaps.ready( function() {
  "use strict";

  let sizeWidth = $( ".field-size_width .readonly" ).text();
  let sizeHeight = $( ".field-size_height .readonly" ).text();

  if ( sizeWidth > 0 && sizeHeight > 0 ) {
    let Map;
    let standardPlacemark;
    let testPlacemark;
    let offsetX = $( "#id_offset_x" );
    let offsetY = $( "#id_offset_y" );

    // Display hint for map.
    $( ".field-check_icon_offset, .hint_check_icon_offset" ).show();

    // Map height correction.
    $( "#id_check_icon_offset_map" ).css( "height", "600px" );

    // Create Map
    Map = new djeymYMaps.Map( "id_check_icon_offset_map", {
      center: [ 0, 0 ],
      zoom: 3,
      type: null
    }, {
      maxZoom: 12,
      minZoom: 0
    } );

    // Connect a third-party source of tiles.
    let djeymSource = function() {
      return "http://" + [ "a", "b", "c", "d" ][ Math.floor( Math.random() * 4 ) ] +
             ".tile.osm.kosmosnimki.ru/night/%z/%x/%y.png";
    };
    Map.layers.add( new djeymYMaps.Layer(
      djeymSource(), {
        projection: djeymYMaps.projection.sphericalMercator
      } ) );
    Map.copyrights.add(
      "Map data: © <a href=\"http://www.openstreetmap.org/copyright\" " +
      "target=\"_blank\">OpenStreetMap</a>  contributors, under ODbL | Tiles: " +
      "© <a href=\"http://osm.kosmosnimki.ru/\" target=\"_blank\">ScanEx</a>"
    );

    if ( Map ) { //
      // Create Standard Placemark
      standardPlacemark = new djeymYMaps.Placemark( Map.getCenter(), {}, {
        iconLayout: "default#image",
        iconImageHref: "/static/djeym/img/offset.svg",
        iconImageSize: [ 60 * 4, 60 * 4 ],
        iconImageOffset: [ -30 * 4, 0 ],
        hasBalloon: false,
        hasHint: false
      } );

      // Create Test Placemark
      testPlacemark = new djeymYMaps.Placemark( Map.getCenter(), {}, {
        iconLayout: "default#image",
        iconImageHref: $( ".file-upload a" ).attr( "href" ),
        iconImageSize: [ ( +sizeWidth * 4 ).toFixed( 1 ), ( +sizeHeight * 4 ).toFixed( 1 ) ],
        iconImageOffset: [ ( +offsetX.val() * 4 ).toFixed( 1 ), ( +offsetY.val() * 4 ).toFixed( 1 ) ],
        hasBalloon: false,
        hasHint: false
      } );

      // Add Placemarks on Map
      Map.geoObjects.add( standardPlacemark );
      Map.geoObjects.add( testPlacemark );

      // Change the position of Placemark on Map through the offset fields.
      $( "#id_offset_x, #id_offset_y" ).on( "keyup mouseup", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        testPlacemark.options.set(
          { iconImageOffset: [ ( +offsetX.val() * 4 ).toFixed( 1 ), ( +offsetY.val() * 4 ).toFixed( 1 ) ] } );
      } );

      $( "#id_offset_x" ).on( "mousewheel", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num;
        if ( event.deltaY === 1 ) {
          num = +offsetX.val() + 0.1;
          num = num.toFixed( 1 );
        } else {
          num = +offsetX.val() - 0.1;
          num = num.toFixed( 1 );
        }
        offsetX.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( num * 4 ).toFixed( 1 ), ( +offsetY.val() * 4 ).toFixed( 1 ) ] } );
      } );

      $( "#id_offset_y" ).on( "mousewheel", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num;
        if ( event.deltaY === 1 ) {
          num = +offsetY.val() - 0.1;
          num = num.toFixed( 1 );
        } else {
          num = +offsetY.val() + 0.1;
          num = num.toFixed( 1 );
        }
        offsetY.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( +offsetX.val() * 4 ).toFixed( 1 ), ( num * 4 ).toFixed( 1 ) ] } );
      } );

      // Add buttons for touch screen.
      // (Добавить кнопки для сенсорного экрана.)
      offsetX.after( "<div id=\"id_offset_x_right_btn\" class=\"marker_offset_btn\">" +
                "<img src=\"/static/djeym/img/arrow_right.svg\" alt=\"Plus\"></div>" );
      offsetX.after( "<div id=\"id_offset_x_left_btn\" class=\"marker_offset_btn\">" +
                "<img src=\"/static/djeym/img/arrow_left.svg\" alt=\"Minus\"></div>" );
      offsetY.after( "<div id=\"id_offset_y_down_btn\" class=\"marker_offset_btn\">" +
                "<img src=\"/static/djeym/img/arrow_down.svg\" alt=\"Minus\"></div>" );
      offsetY.after( "<div id=\"id_offset_y_up_btn\" class=\"marker_offset_btn\">" +
                "<img src=\"/static/djeym/img/arrow_up.svg\" alt=\"Plus\"></div>" );

      $( "#id_offset_x_right_btn" ).on( "touchstart click", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num = ( +offsetX.val() + 0.1 ).toFixed( 1 );
        offsetX.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( num * 4 ).toFixed( 1 ), ( +offsetY.val() * 4 ).toFixed( 1 ) ] } );
      } );
      $( "#id_offset_x_left_btn" ).on( "touchstart click", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num = ( +offsetX.val() - 0.1 ).toFixed( 1 );
        num = ( num < 0 ) ? num : 0;
        offsetX.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( num * 4 ).toFixed( 1 ), ( +offsetY.val() * 4 ).toFixed( 1 ) ] } );
      } );
      $( "#id_offset_y_down_btn" ).on( "touchstart click", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num = ( +offsetY.val() + 0.1 ).toFixed( 1 );
        offsetY.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( +offsetX.val() * 4 ).toFixed( 1 ), ( num * 4 ).toFixed( 1 ) ] } );
      } );
      $( "#id_offset_y_up_btn" ).on( "touchstart click", function( event ) {
        event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
        let num = ( +offsetY.val() - 0.1 ).toFixed( 1 );
        num = ( num < 0 ) ? num : 0;
        offsetY.val( num );
        testPlacemark.options.set(
          { iconImageOffset: [ ( +offsetX.val() * 4 ).toFixed( 1 ), ( num * 4 ).toFixed( 1 ) ] } );
      } );
    }
  }
} );
