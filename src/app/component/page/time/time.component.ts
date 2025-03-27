import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  @ViewChild('tempo') tempoInput!: ElementRef;
  @ViewChild('tempoEm') tempoEmSelect!: ElementRef;
  @ViewChild('tempoPara') tempoParaSelect!: ElementRef;
  resultado: string = '--';

  constructor(private router: Router, private route: ActivatedRoute) {}

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}], {relativeTo: this.route.parent});
  }

  converterTempo(event: Event): void {
    event.preventDefault(); // Evita a atualização da página

    const tempo = this.tempoInput.nativeElement.value;
    const de = this.tempoEmSelect.nativeElement.value;
    const para = this.tempoParaSelect.nativeElement.value;

    const fatores: { [key: string]: number } = {
      segundos: 1,
      minutos: 60,
      horas: 3600,
      dias: 86400
    };

    if (!tempo || isNaN(tempo) || !fatores[de] || !fatores[para]) {
      this.resultado = 'Entrada inválida';
      return;
    }

    const tempoEmSegundos = tempo * fatores[de];
    const resultadoConvertido = tempoEmSegundos / fatores[para];
    this.resultado = `${resultadoConvertido} ${para}`;
  }

}
