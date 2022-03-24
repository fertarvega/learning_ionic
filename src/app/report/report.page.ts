import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage implements AfterViewInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: any;

  constructor() { }

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Sekiro', 'Megaman', 'Prey', 'Stardew Valley'],
        datasets: [{
          label: '# of games sold',
          data: [5000000, 800000, 1500000, 15000000],
          backgroundColor: [
            'rgba(255, 26, 26, 0.6)',
            'rgba(0, 102, 255, 0.6)',
            'rgba(0, 0, 77, 0.6)',
            'rgb(255, 153, 0, 0.6)',
          ],
          hoverBackgroundColor: [
            '#ff1a66',
            '#0000ff',
            '#00bfff',
            '#ffff00'
          ]
        }]
      }
    });
  }

}