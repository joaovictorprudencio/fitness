import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number =0;
  result: string="";

  calcularImc(): void {
   this.imc = this.peso / (this.altura * this.altura);
    this.imc = parseFloat(this.imc.toFixed(2));
  }

  resultImc():void {

     if(this.imc < 18.5){
       this.result = "Risco de desnutrição";
     } else if(this.imc >= 18.5 && this.imc < 25){
      this.result = "Peso normal"
     }else if (this.imc >= 25 && this.imc< 30) {
      this.result = "Sobrepeso";
    } else {
      this.result = "Obesidade";
    }

  }


   
}
