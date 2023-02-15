import { Component, OnInit, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PhotoChunks } from '../models/photo.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input('isSite2') isSite2: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var D = document;
    let height = Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );

    if ((window.innerHeight + window.scrollY) >= height - 10) {
      this.page++;
      this.loadPhoto();
    }
  }

  public loading: boolean = false;
  public isFirst: boolean = true;
  public page: number = 1

  public photos: any[] = [];

  public photoChunks: PhotoChunks = new PhotoChunks()

  public rowHeight = [0, 0, 0];

  constructor(private _photo: PhotoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSiteForResults();
  }

  private setSiteForResults(): void {
    if (this.isSite2 && this.isFirst) {
      var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
      window.scroll(0, h);
      this.loadPhoto();
      this.isFirst = false;
    }
  }

  private filter(photo: any) {
    let photoHeight: number = photo.height / photo.width;
    let pushTo: number = 0;
    for (let i = 0; i < 3; i++) {
      if (this.rowHeight[i] <= this.rowHeight[(i + 1) % 3] && this.rowHeight[i] <= this.rowHeight[(i + 2) % 3]) {
        pushTo = i;
      }
    }
    switch (pushTo) {
      case 0:
        this.photoChunks.chunk1.push(photo);
        this.rowHeight[0] += photoHeight;
        break;
      case 1:
        this.photoChunks.chunk2.push(photo);
        this.rowHeight[1] += photoHeight;
        break;
      case 2:
        this.photoChunks.chunk3.push(photo);
        this.rowHeight[2] += photoHeight;
        break;
    }
  }

  private loadPhoto() {
    this.loading = true;
    console.log('hello')
    this._photo.photos(this.page).subscribe(obj => {
      for (let i = 0; i < obj.length; i++) {
        this.filter(obj[i])
      }
      this.page++;
      this.loading = false;
    })
  }

}
