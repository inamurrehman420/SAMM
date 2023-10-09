import { Component } from "@angular/core";
import * as ApexCharts from "apexcharts";
import * as moment from "moment";

const TIME = [
  "2019-01-01",
  "2019-01-02",
  "2019-01-03",
  "2019-01-04",
  "2019-01-05",
  "2019-01-06",
  "2019-01-07",
  "2019-01-08",
  "2019-01-09",
  "2019-01-10",
];
@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent {
  constructor() {}

  ngOnInit() {
    const a = [0, 10, 23, 17, 18, 9, 11, 27, 33, 40].map((y, i) => ({
      y,
      x: TIME[i],
    }));
    console.log(a);
    let options = {
      chart: {
        type: "bar",
        heigth: "200px",
      },
      title: { text: "User Records" },
      series: [
        {
          name: "Revenue",
          data: a,
        },
      ],
      xaxis: {
        type: "datetime",
        tickAmount: 1,
        labels: {
          formatter: (val) => moment(val).format("DD/MM/YYYY"),
        },
      },
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }
}
