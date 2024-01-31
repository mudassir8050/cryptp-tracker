// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { convertNumbers } from "../../../functions/convertNumbers";

// function LineChart({ chartData, mutliAxis, priceType }) {
//   const options = {
//     plugins: {
//       legend: {
//         display: mutliAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       y: {
//         ticks:
//           priceType == "market_caps"
//             ? {
//                 callback: function (value) {
//                   return "$" + convertNumbers(value);
//                 },
//               }
//             : priceType == "total_volumes"
//             ? {
//                 callback: function (value) {
//                   return convertNumbers(value);
//                 },
//               }
//             : {
//                 callback: function (value, index, ticks) {
//                   return "$" + value.toLocaleString();
//                 },
//               },
//       },
//       y1: mutliAxis
//         ? {
//             type: "linear",
//             display: true,
//             position: "right",
//             ticks:
//               priceType == "market_caps"
//                 ? {
//                     callback: function (value) {
//                       return "$" + convertNumbers(value);
//                     },
//                   }
//                 : priceType == "total_volumes"
//                 ? {
//                     callback: function (value) {
//                       return convertNumbers(value);
//                     },
//                   }
//                 : {
//                     callback: function (value, index, ticks) {
//                       return "$" + value.toLocaleString();
//                     },
//                   },
//           }
//         : { display: false },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// }

// export default LineChart;


import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumbers } from "../../../functions/convertNumbers";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    maintainAspectRatio: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: multiAxis
      ? {
          crypto1: {
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              callback: function (value, index, ticks) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                else {
                  return "$" + convertNumbers(value);
                }
              },
            },
          },
          crypto2: {
            type: "linear",
            display: true,
            position: "right",
            ticks: {
              callback: function (value, index, ticks) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                else {
                  return "$" + convertNumbers(value);
                }
              },
            },
          },
        }
      : {
          cryptoSingle: {
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              // display:false,
              callback: function (value, index, ticks) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                else {
                  return "$" + convertNumbers(value);
                }
              },
            },
          },
        },
  };
  ;
  return <Line data={chartData} options={options}/>
}
export default LineChart;
