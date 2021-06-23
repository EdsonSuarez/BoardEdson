import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  public successMessage: String;
  public errorMessage: String;
  public tasksData: any;

  constructor(private board: BoardService, private router: Router) {
    this.tasksData = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.board.listTask().subscribe(
      (res) => {
        this.tasksData = res.board;
      },
      (err) => {
        this.errorMessage = err.error;
      }
    )
  }
  updateTask(task: any, status: String){}
  deleteTask(task: any){}
  closeAlert() {
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
    }, 3000);
  }

  closeX() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
