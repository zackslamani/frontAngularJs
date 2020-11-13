import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/services/pangolin.service';

@Component({
  selector: 'app-pangolins-list',
  templateUrl: './pangolins-list.component.html',
  styleUrls: ['./pangolins-list.component.css']
})
export class PangolinsListComponent implements OnInit {

  pangolins: any;
  currentPangolin = null;
  currentIndex = -1;
  name = '';

  constructor(private pangolinService: PangolinService) { }

  ngOnInit(): void {
  this.retrievePangolins();
  }

  retrievePangolins(): void {
    this.pangolinService.getAll()
    .subscribe(
      data => {
        this.pangolins = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrievePangolins();
    this.currentPangolin = null;
    this.currentIndex = -1;
  }

  setActivePangolin(pangolin, index): void {
    this.currentPangolin = pangolin;
    this.currentIndex = index;
  }

  removeAllPangolins(): void {
    this.pangolinService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePangolins();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.pangolinService.findByName(this.name)
      .subscribe(
        data => {
          this.pangolins = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
