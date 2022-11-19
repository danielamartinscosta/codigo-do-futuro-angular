import { Component, OnInit } from '@angular/core';
import { Estoque } from '../models/Estoque';



@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  constructor() { }

  public estoque:Estoque = {} as Estoque
  
  public estoques:Estoque[] = [
    { id: 1, 
      nome: "Maçã", 
      descricao: "Maçã", 
      preco: 8.90 
    },
    { id: 2, 
      nome: "Banana", 
      descricao: "Banana Maçã", 
      preco: 7.50 
    },
    { id: 3, 
      nome: "Laranja", 
      descricao: "Laranja Pêra", 
      preco: 5.90 
    },
  
  ]

  ngOnInit(): void {
    
  }

  cadastrar(){
    let id = this.estoques.length + 1
    let novoProduto: Estoque = {
      id: id,
      nome: this.estoque.nome,
      descricao: this.estoque.descricao,
      preco: this.estoque.preco
    } as Estoque
    this.estoques.push(novoProduto)
  }

  alterar(){
  
    this.estoques.values

    }

  excluir(id:Number): void{
    return 
  }
  }

