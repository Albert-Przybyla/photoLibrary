import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public slected: number = 2;

  public tab = [
    { id: 0, name: "dsaads1`2" },
    { id: 1, name: "dsaadweqrs" },
    { id: 2, name: "dsaqwerqewads" },
    { id: 3, name: "dsaeqfrdsaads" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
