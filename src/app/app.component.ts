import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public lastPoz: number = 0;
  public menuColor: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let poz = window.scrollY;
    let height = window.innerHeight;
    if (poz >= height / 10 && poz < height) {
      setTimeout(() => {
        if (this.lastPoz >= poz)
          this.scroll("site2")
      }, 600)
    }
    if (poz >= height * 0.8)
      this.menuColor = true;
    else
      this.menuColor = false;
    this.lastPoz = poz;
  }

  title = 'photoLibrary';

  constructor(private _photo: PhotoService) { }

  ngOnInit(): void {
  }

  scroll(name: string) {
    document.getElementById(name)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  }


}
