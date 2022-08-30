import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu : Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.edu = data;
      }, err =>{
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.edu).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=> {
        alert("error al modificar la educacion");
        this.router.navigate([""]);
      }
    )}}
