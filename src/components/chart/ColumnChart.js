import CanvasJSReact from '../../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SampleColumnChart() {
    CanvasJS.addColorSet("columnShades", ["#FF9999", "#FFFFCC", "#FFCCFF", "#99CC99", "#FFCC99", "#9999FF", "#CC99CC"]);

    const options = {
        height: 300,
        width: 400,
        colorSet: "columnShades",
        animationEnabled: true,
        title: {
            text: "แผนภูมิความถี่การเข้าสวนสนุกรายวัน",
            fontSize: 16,
            fontWeight: "bold",
            fontColor: "#000",
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Sun", y: 584 },
                { label: "Mon", y: 658 },
                { label: "Tue", y: 631 },
                { label: "Wed", y: 621 },
                { label: "Thu", y: 605 },
                { label: "Fri", y: 600 },
                { label: "Sat", y: 600 },
            ]
        }]
    }

    return (
        <div className="w-[400px]">
            <CanvasJSChart options={options} />
        </div >
    );
}

function ActivityColumnChart() {
    CanvasJS.addColorSet("columnShades", ["#FF9999", "#FFFFCC", "#FFCCFF", "#99CC99", "#FFCC99", "#9999FF", "#CC99CC"]);

    const options = {
        height: 200,
        width: 400,
        colorSet: "columnShades",
        animationEnabled: true,
        title: {
            text: "แผนภูมิกิจกรรมที่ลูกค้าเล่น",
            fontSize: 16,
            fontWeight: "bold",
            fontColor: "#000",
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Sun", y: 584 },
                { label: "Mon", y: 658 },
                { label: "Tue", y: 631 },
                { label: "Wed", y: 621 },
                { label: "Thu", y: 605 },
                { label: "Fri", y: 600 },
                { label: "Sat", y: 600 },
            ]
        }]
    }

    return (
        <div className="w-[400px]">
            <CanvasJSChart options={options} />
        </div >
    );
}

export { SampleColumnChart, ActivityColumnChart };