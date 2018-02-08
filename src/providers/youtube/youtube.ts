import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  apiKey = 'AIzaSyDUrL6do1pox8GZWDNqcIvPwXqxdGwKI20';

  constructor(public http: Http) {
    console.log('Hello YoutubeProvider Provider');
  }

  // https://devdactic.com/ionic-youtube-rest-api/
  /*getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }
 
  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }*/
  getVideo(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?key=' + this.apiKey + '&part=snippet')
    .map((res) => {
      return res.json()['items'];
    })
  }
}
