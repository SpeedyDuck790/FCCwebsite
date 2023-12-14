/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const FCC = { lat: -38.147527, lng: 145.143350 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: FCC,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Frankston Chess Club</h1>' +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Frankston Chess club",
  });
  const marker = new google.maps.Marker({
    position: FCC,
    map,
    title: "Frankston Chess Club",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
