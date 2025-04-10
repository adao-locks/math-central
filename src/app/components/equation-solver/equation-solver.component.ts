import { Component } from '@angular/core';

@Component({
  selector: 'app-equation-solver',
  templateUrl: './equation-solver.component.html',
  styleUrls: ['./equation-solver.component.css']
})
export class EquationSolverComponent {
  activeTab: string = 'linear';

  // Linear equation (ax + b = 0)
  linearA: string = '1';
  linearB: string = '0';
  linearSolution: string | null = null;
  showLinearSolution: boolean = false;

  // Quadratic equation (ax² + bx + c = 0)
  quadraticA: string = '1';
  quadraticB: string = '0';
  quadraticC: string = '0';
  quadraticSolution: string | null = null;
  showQuadraticSolution: boolean = false;

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  solveLinear(): void {
    const a = parseFloat(this.linearA);
    const b = parseFloat(this.linearB);

    if (a === 0) {
      if (b === 0) {
        this.linearSolution = "Infinite solutions (identity)";
      } else {
        this.linearSolution = "No solution (contradiction)";
      }
    } else {
      const solution = -b / a;
      this.linearSolution = `x = ${solution}`;
    }

    this.showLinearSolution = true;
  }

  solveQuadratic(): void {
    const a = parseFloat(this.quadraticA);
    const b = parseFloat(this.quadraticB);
    const c = parseFloat(this.quadraticC);

    if (a === 0) {
      // This is actually a linear equation
      if (b === 0) {
        if (c === 0) {
          this.quadraticSolution = "Infinite solutions (identity)";
        } else {
          this.quadraticSolution = "No solution (contradiction)";
        }
      } else {
        const solution = -c / b;
        this.quadraticSolution = `x = ${solution}`;
      }
    } else {
      const discriminant = b * b - 4 * a * c;

      if (discriminant < 0) {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
        this.quadraticSolution = `x₁ = ${realPart.toFixed(4)} + ${imaginaryPart.toFixed(4)}i\nx₂ = ${realPart.toFixed(4)} - ${imaginaryPart.toFixed(4)}i`;
      } else if (discriminant === 0) {
        const solution = -b / (2 * a);
        this.quadraticSolution = `x = ${solution} (double root)`;
      } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        this.quadraticSolution = `x₁ = ${x1}\nx₂ = ${x2}`;
      }
    }

    this.showQuadraticSolution = true;
  }
}
