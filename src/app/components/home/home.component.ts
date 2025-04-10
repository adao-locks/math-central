import { Component } from '@angular/core';

interface Tool {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tools: Tool[] = [
    {
      title: 'Basic Calculator',
      description: 'Perform basic arithmetic operations',
      icon: 'calculator',
      route: '/calculator'
    },
    {
      title: 'Equation Solver',
      description: 'Solve linear and quadratic equations',
      icon: 'activity',
      route: '/equation-solver'
    },
    {
      title: 'Fraction Calculator',
      description: 'Add, subtract, multiply and divide fractions',
      icon: 'divide',
      route: '/fractions'
    },
    {
      title: 'Percentage Calculator',
      description: 'Calculate percentages, increases and decreases',
      icon: 'percent',
      route: '/percentage'
    },
    {
      title: 'Unit Converter',
      description: 'Convert between different units of measurement',
      icon: 'plus-square',
      route: '/unit-converter'
    },
    {
      title: 'Calculus Tools',
      description: 'Derivatives, integrals and limits',
      icon: 'infinity',
      route: '/calculus'
    }
  ];
}
