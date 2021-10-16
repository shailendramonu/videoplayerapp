import { Component } from '@angular/core';
import { VideoPlayerConfig } from './models/thunmbnail-video.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videoplayerapp';
  options: VideoPlayerConfig = {
    width: '960px',
    height: '540px',
    //frontendPreload: false
  };
}
