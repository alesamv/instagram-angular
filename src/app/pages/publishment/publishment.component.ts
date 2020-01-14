import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishment',
  templateUrl: './publishment.component.html',
  styleUrls: ['./publishment.component.css']
})
export class PublishmentComponent implements OnInit {
  public showComments = false;
  
  public comments = [
    {
      id: 1,
      name: 'Juanito',
      comment: 'Bonita Foto'
    },
    {
      id: 2,
      name: 'george',
      comment: '7u7'
    },
    {
      id: 3,
      name: 'userN',
      comment: ':)'
    }
  ]
  
  public comment ={
    input: '',
    name: 'ale',
    id: 0 
  }

  constructor() { }

  ngOnInit() {
  }

  public toggleComments(){
    this.showComments = !this.showComments
  }

  public sendMessage(){
    let newArray = [];
    newArray.push(
      {
        name: this.comment.name,
        comment: this.comment.input,
        id: 5
      }
    )    
    this.comments = newArray
  }
}
