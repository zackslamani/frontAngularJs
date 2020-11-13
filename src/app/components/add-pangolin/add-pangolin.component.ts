import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/services/pangolin.service';

@Component({
  selector: 'app-add-pangolin',
  templateUrl: './add-pangolin.component.html',
  styleUrls: ['./add-pangolin.component.css']
})
export class AddPangolinComponent implements OnInit {
  pangolin = {
    name: '',
    age: 0,
    family: '',
    breed: '',
    food: ''
  };
  submitted = false;
  
  constructor(private pangolinService: PangolinService) { }

  ngOnInit(): void {
  }

  savePangolin(): void{
    const data = {
      name: this.pangolin.name,
      age: this.pangolin.age,
      family: this.pangolin.family,
      breed: this.pangolin.breed,
      food: this.pangolin.food
    };

    this.pangolinService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newPangolin(): void {
    this.submitted = false;
    this.pangolin = {
      name: '',
      age: 0,
      family: '',
      breed: '',
      food: ''
    };
  }

}
