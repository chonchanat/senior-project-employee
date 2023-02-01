import CanvasJSReact from '../../canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SamplePieChart() {
    const options = {
        height: 300,
        width: 300,
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "แผนภูมิจำแนกกลุ่มของลูกค้า",
            fontSize: 18,
            fontWeight: "bold",
            fontColor: "#000",
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
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
        <div className="w-[300px]">
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default SamplePieChart;