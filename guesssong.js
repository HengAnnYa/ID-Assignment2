
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '617f6191c3164938b1730c7dd94403a6',
  clientSecret: 'a7d366b28a79491d92a2bf0d87c585ba',
  redirectUri: 'http://localhost:8080/callback'
});

var scopes = ['playlist-read-private', 'playlist-read-collaborative', 'user-modify-playback-state', 
	'user-read-currently-playing', 'user-read-private', 'user-library-read', 'user-read-playback-state'];