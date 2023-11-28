import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalaryCalculatorService {
  // Tax bands and rates
  personalAllowance = 12570;
  basicRateThreshold = 50000;
  basicRate = 0.2;
  higherRate = 0.4;
  additionalRate = 0.45;

  // National Insurance rates
  niThreshold = 9500;
  lowerNIRate = 0.12;
  newLowerNIRate = 0.1; //after January
  upperNIRate = 0.02;
  monthlySalary: number | null = null;

  constructor() {}

  calculateInHandSalary(annualSalary: number): number {
    // Calculate income tax
    let incomeTax = 0;

    if (annualSalary <= this.personalAllowance) {
      incomeTax = 0;
    } else if (annualSalary <= this.basicRateThreshold) {
      incomeTax = (annualSalary - this.personalAllowance) * this.basicRate;
    } else {
      incomeTax =
        (this.basicRateThreshold - this.personalAllowance) * this.basicRate +
        (annualSalary - this.basicRateThreshold) * this.higherRate;
    }

    // Calculate National Insurance contributions
    const niContributions =
      annualSalary <= this.niThreshold
        ? 0
        : (Math.min(annualSalary, this.basicRateThreshold) - this.niThreshold) *
            this.lowerNIRate +
          Math.max(0, annualSalary - this.basicRateThreshold) *
            this.upperNIRate;

    // Calculate in-hand salary
    const inHandSalary = annualSalary - incomeTax - niContributions;

    return inHandSalary;
  }

  calculateTaxDetails(
    annualSalary: number,
    taxCode: string
  ): {
    incomeTax: number;
    niContributions: number;
  } {
    // Calculate income tax
    let incomeTax = 0;

    if (annualSalary > this.personalAllowance) {
      incomeTax +=
        (Math.min(annualSalary, this.basicRateThreshold) -
          this.personalAllowance) *
        this.basicRate;
      if (annualSalary > this.basicRateThreshold) {
        incomeTax += (annualSalary - this.basicRateThreshold) * this.higherRate;
      }
    }

    // Calculate National Insurance contributions
    const niContributions =
      annualSalary <= this.niThreshold
        ? 0
        : (Math.min(annualSalary, this.basicRateThreshold) - this.niThreshold) *
            this.lowerNIRate +
          Math.max(0, annualSalary - this.basicRateThreshold) *
            this.upperNIRate;

    return { incomeTax, niContributions };
  }
}
