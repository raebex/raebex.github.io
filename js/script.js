;(function() {
  'use strict';

var lastfm = {
  method: "user.getRecentTracks",
  user: "myaesthetickin",
  limit: "2",
  api_key: "1833c4b1851422da506a1f1eb056123c",
  format: "json"
}

fetch('http://ws.audioscrobbler.com/2.0/' +
  "?method=" + lastfm.method +
  "&user=" + lastfm.user +
  "&limit=" + lastfm.limit +
  "&api_key=" + lastfm.api_key +
  "&format=" + lastfm.format
  )
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    populateRecentTracks(json);
  });

var populateRecentTracks = function(tracks){
  var music = document.querySelector('#music');
  var link = music.content.querySelector('a');
  var song_list = document.querySelector("#song-list");
  var clone;

  for (var i = 0; i < tracks.recenttracks.track.length; i++) {
    var song = {
      name: tracks.recenttracks.track[i].name,
      artist: tracks.recenttracks.track[i].artist["#text"],
      url: tracks.recenttracks.track[i].url
    }

    link.setAttribute('href', song.url);
    link.textContent = song.name + ' - ' + song.artist;

    clone = document.importNode(music.content, true);
    song_list.appendChild(clone);
  }
};

})();
