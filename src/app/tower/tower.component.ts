import { Component, OnInit, Input } from '@angular/core';
import { Tower } from "../shared/tower";

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  @Input() tower: Tower;
  level: number;
  towerHeight: number = 0;
  towerCoordsY: number = 408;
  constHeightSVG: number = 396;

  constructor() {
  }

  ngOnInit() {
    const { maxValue, value } = this.tower.indicator;

    this.level = Math.ceil(value / maxValue * 100);

    this.towerHeight += this.level * this.constHeightSVG / 100;
    this.towerCoordsY -= this.level * this.constHeightSVG / 100;
    // console.log(this);
  }

}
