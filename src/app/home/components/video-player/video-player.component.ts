import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

declare var amp: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('video', {static: true}) videoPlayer: any;
  @Input() id: any;
  @Input() src: any;
  @Input() autoplay: any;
  @Input() width: any;
  @Input() height: any;
  public version: string = "2.2";

  constructor() { }

  ngOnInit() {
    console.log(this.videoPlayer);

    // Dynamically load the amp player control
    var myPlayer = amp(this.videoPlayer.nativeElement, {
      /* Options */
      "nativeControlsForTouch": false,
      autoplay: this.autoplay,
      controls: true,
      width: this.width,
      height: this.height,
      id: this.id,
      logo: { enabled: false },
      ampAds: {
        mainProgram: {
            source:  [{
                src: this.src
              }]
        }
      }
    }
    );

    myPlayer.ngComponent = this;

  }
}
