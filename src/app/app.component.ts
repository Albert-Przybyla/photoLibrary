import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'photoLibrary';

  public slected: number = 2;

  public tab = [
    { id: 0, name: "dsaads1`2" },
    { id: 1, name: "dsaadweqrs" },
    { id: 2, name: "dsaqwerqewads" },
    { id: 3, name: "dsaeqfrdsaads" }
  ]

  constructor(private _photo: PhotoService) { }

  ngOnInit(): void {
    this.test()
  }

  private test() {
    this._photo.photos().subscribe(obj => {
      console.log(obj)
    })
  }


}
