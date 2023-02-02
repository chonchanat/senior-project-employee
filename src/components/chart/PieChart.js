import CanvasJSReact from '../../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SamplePieChart() {
    CanvasJS.addColorSet("pieShades", ["#FF9999", "#FFFFCC", "#FFCCFF", "#99CC99", "#FFCC99", "#9999FF", "#CC99CC"]);
  
    const options = {
        height: 300,
        width: 400,
        colorSet: "columnShades",
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "แผนภูมิจำแนกกลุ่มของลูกค้า",
            fontSize: 16,
            fontWeight: "bold",
            fontColor: "#000",
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Direct" },
                { y: 49, label: "Organic Search" },
                { y: 9, label: "Paid Search" },
                { y: 5, label: "Referral" },
                { y: 19, label: "Social" }
            ]
        }]
    }
    return (
        <div className="w-[400px]">
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default SamplePieChart;