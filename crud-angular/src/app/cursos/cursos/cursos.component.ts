import { Component } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos: Curso[] = [
    {
      _id: "1", name: 'Angular', category: 'front-end'
    },
    {
      _id: "2", name: 'Java', category: 'back-end'
    },
    {
      _id: "3", name: 'PHP', category: 'back-end'
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor(){
    //this.cursos = [];
  }


}
