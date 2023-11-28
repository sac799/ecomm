import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorService } from '../salary-calculator.service';

@Component({
  selector: 'app-salary-calc',
  templateUrl: './salary-calc.component.html',
  styleUrls: ['./salary-calc.component.css'],
})
export class SalaryCalcComponent implements OnInit {
  annualSalary: number = 0;
  inHandSalary: number | null = null;
  monthlySalary: number | null = null;
  dailySalary: number | null = null;
  taxDetails: { incomeTax: number; niContributions: number } | null = null;
  monthlyTaxDetails: { incomeTax: number; niContributions: number } | null =
    null;

  constructor(private calculator: SalaryCalculatorService) {}

  ngOnInit(): void {}

  calculateInHandSalary() {
    this.inHandSalary = this.calculator.calculateInHandSalary(
      this.annualSalary
    );
    this.monthlySalary = this.inHandSalary / 12;
    this.dailySalary = this.inHandSalary / 252;
    this.calculateTaxDetails();
  }

  private calculateTaxDetails() {
    this.taxDetails = this.calculator.calculateTaxDetails(this.annualSalary);
  }

  clearForm(){
    this.annualSalary = 0;
    this.inHandSalary = null;
    this.monthlySalary = null;
    this.dailySalary = null;
    this.taxDetails = null;
  }
}
