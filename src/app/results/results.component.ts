import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input('isSite2') isSite2: boolean = false;

  public loading: boolean = false;
  public isFirst: boolean = true;

  public photos: any[] = [];

  constructor(private _photo: PhotoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSite2 && this.isFirst) {
      this.loadPhoto();
      this.isFirst = false;
    }
  }

  private loadPhoto() {
    this.loading = true;
    this._photo.photos().subscribe(obj => {
      this.photos = obj;
      console.log(this.photos)
      this.loading = false;
    })
  }

}
