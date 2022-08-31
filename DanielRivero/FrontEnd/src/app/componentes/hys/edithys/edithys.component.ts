import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})
export class EdithysComponent implements OnInit {
 hardysoft : Hys = null;

  constructor(private hysS: HysService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysS.detail(id).subscribe(
      data=> {
        this.hardysoft = data;
      }, err=>{
        alert("error al modificar")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysS.update(id, this.hardysoft).subscribe(
      data=> {
        this.router.navigate(['']);
      },err=> {
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
