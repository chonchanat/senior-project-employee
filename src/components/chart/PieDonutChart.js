import CanvasJSReact from '../../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SamplePieDonutChart() {
    CanvasJS.addColorSet("pieDonutShades", ["#5FAAF0", "#E0E0E0"]);

    const options = {
        animationEnabled: true,
        height: 200,
        width: 200,
        colorSet: "pieDonutShades",
        subtitles: [{
            text: "71%",
            verticalAlign: "center",
            fontSize: 40,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Acitivty", y: 71 },
                { name: "Rest", y: 29 },
            ]
        }]
    }
    return (
        <div className="flex w-[400px]">
            <div className="w-[200px]">
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
            </div>
            <div className="flex items-center ml-4">
                <p>กิจกรรมนี้มีสัดส่วน <br/>การจองคิวอยู่ที่ <br/>71% จากการจองคิวทั้งหมด</p>
            </div>
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default SamplePieDonutChart;