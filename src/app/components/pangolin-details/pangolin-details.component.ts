import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/services/pangolin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pangolin-details',
  templateUrl: './pangolin-details.component.html',
  styleUrls: ['./pangolin-details.component.css']
})
export class PangolinDetailsComponent implements OnInit {
  currentPangolin = null;
  message = '';

  constructor(
    private pangolinService: PangolinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPangolin(this.route.snapshot.paramMap.get('id'));
  }

  getPangolin(id): void {
    this.pangolinService.get(id)
      .subscribe(
        data => {
          this.currentPangolin = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updatePangolin(): void {
    this.pangolinService.update(this.currentPangolin.id, this.currentPangolin)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The pangolin was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }

  deletePangolin(): void {
    this.pangolinService.delete(this.currentPangolin.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pangolins']);
      },
      error => {
        console.log(error);
      });
  }
}