import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent implements OnInit {
  nombreH: string;
  porcentaje: number;

  constructor(private hysS: HysService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hys = new Hys(this.nombreH, this.porcentaje);
    this.hysS.save(hys).subscribe(
      data => {
        alert("Hard y Soft añadido correctamente")
        this.router.navigate(['']);
      },err =>{
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }
}
