import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  @ViewChild('site2', { static: true }) site2: any;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let poz = window.scrollY;
    let height = window.innerHeight;
    // console.log(poz)
    // console.log(height)
    if (poz >= height / 2) {
      this.scrollToElement();
    }
  }

  title = 'photoLibrary';

  constructor(private _photo: PhotoService) { }

  ngOnInit(): void {
    this.test()
  }

  private test() {
    this._photo.photos().subscribe(obj => {
      console.log(obj)
    })
  }

  private scrollToElement(): void {
    console.log("scrolllll")
    this.site2.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


}
