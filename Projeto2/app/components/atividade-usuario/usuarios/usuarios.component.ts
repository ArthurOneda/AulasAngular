import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { UserComponent } from "../user/user.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, UserComponent, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  usuarios:User[] = []
  user!:User;
  userForm!:FormGroup
  constructor(private userService:UserService){
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    let users = []
    this.userService.getAllUsers().subscribe(
      {
        next: res => this.usuarios = res,
        error: err => console.log(err)
      }
    )
  }
  addUser(){
    this.userService.addUser(this.userForm.value).subscribe({
      next: res => {
        alert("Usuário cadastrado")
        this.getUsers()
        this.userForm.reset
      },
      error: err => alert(err)
    })
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe({
      next: () => {alert("Usuário deletado com sucesso!")
      this.getUsers()},
      error: () => alert("Erro ao deletar o usuário")
    })
  }
}
