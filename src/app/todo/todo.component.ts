import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	oldText = '';
	myText = 'Hi';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	this.oldText += this.myText + `<br>`;
  	this.myText = '';
  }

}
