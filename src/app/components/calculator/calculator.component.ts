import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  inputDigit(digit: string): void {
    if (this.waitingForSecondOperand) {
      this.display = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.display = this.display === '0' ? digit : this.display + digit;
    }
  }

  inputDecimal(): void {
    if (this.waitingForSecondOperand) {
      this.display = '0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  clearDisplay(): void {
    this.display = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  backspace(): void {
    this.display = this.display.slice(0, -1) || '0';
  }

  handleOperator(nextOperator: string): void {
    const inputValue = parseFloat(this.display);

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
      this.display = String(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
  }

  performCalculation(op: string, first: number, second: number): number {
    switch (op) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      case '%':
        return (first / 100) * second;
      default:
        return second;
    }
  }

  calculateResult(): void {
    if (this.firstOperand === null || this.operator === null) return;

    const inputValue = parseFloat(this.display);
    const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
    this.display = String(result);
    this.firstOperand = result;
    this.operator = null;
    this.waitingForSecondOperand = true;
  }
}
