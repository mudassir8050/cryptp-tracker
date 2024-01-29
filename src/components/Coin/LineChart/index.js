import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { converNumbers } from "../../../functions/convertNumbers";


function LineChart({ chartData, priceType, multiAxis }){
    const options = {
        plugins: {
          legend: {
            display: multiAxis ? true : false,
          },
        },
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales:{
            crypto1:{
                label:"Crypto1",
                type:"linear",
                display:true,
                position:"left",
                ticks:{
                    // include a dollar sign
                    callback:function(value,index,ticks){
                        if(priceType==="prices")
                        return "$"+value.toLocaleString();
                    else{
                        return "$" + converNumbers(value)

                    }
                    }
                }
            },
            crypto2:{
                label:"Crypto2",
                type:"linear",
                display:true,
                position:"right",
                ticks:{
                    // include a dollar sign
                    callback:function(value,index,ticks){
                        if(priceType==="prices")
                        return "$"+value.toLocaleString();
                    else{
                        return "$" + converNumbers(value)

                    }
                    }
                }
            }
        }
    };

    return <Line data={chartData} options={options} />
}

export default LineChart;