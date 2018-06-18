import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { Tower } from '../shared/tower';
import { TowersService } from '../towers.service';

@Component({
  selector: 'app-list-towers',
  templateUrl: './list-towers.component.html',
  styleUrls: ['./list-towers.component.css']
})
export class ListTowersComponent implements OnInit {

  towers: Tower[];

  constructor(private towersService: TowersService) {
  }

  ngOnInit() {
    // нужно обновлять данные.., данные приходят не изменённые
    this.getTowers();
    // interval(2000).subscribe(
    //   () => this.getTowers()
    // );
  }

  getTowers(): void {
    this.towersService.getTowers()
      .subscribe((towers: Tower[]) => this.towers = towers);
  }
}
