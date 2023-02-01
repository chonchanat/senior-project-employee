import CanvasJSReact from '../../canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SampleColumnChart() {
    const list = ["a", "b", "c"]
    const options = {
        height: 300,
        width: 300,
        animationEnabled: true,
        title: {
            text: "แผนภูมิแสดงความถี่การเข้าสวนสนุกรายวัน",
            fontSize: 18,
            fontWeight: "bold",
            fontColor: "#000",
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: list[0], y: 584 },
                { label: list[1], y: 658 },
                { label: list[2], y: 631 },
                { label: "Wend", y: 621 },
                { label: "Thur", y: 605 },
                { label: "Fri", y: 600 },
                { label: "Sat", y: 600},
            ]
        }]
    }

    return (
        <div className="w-[300px]">
            <CanvasJSChart options={options} />
        </div >
    );
}

export default SampleColumnChart;