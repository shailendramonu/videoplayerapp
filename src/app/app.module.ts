import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { VideoControlsComponent } from './video-controls/video-controls.component';
import { OnHoverDirective } from './directives/on-hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    VideoThumbnailComponent,
    VideoControlsComponent,
    OnHoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
