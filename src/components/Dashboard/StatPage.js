import { SampleColumnChart } from "../chart/ColumnChart";
import SamplePieChart from "../chart/PieChart";
import SamplePieDonutChart from "../chart/PieDonutChart";
import { RatingTotal } from "./CommentPage";

function StatPage() {
    return (
        <div className="pt-2 flex-1 flex flex-col">
            <p>สถิติทั่วไป</p>
            <div className="flex justify-around my-8">
                <SampleColumnChart />
                <SamplePieChart />
            </div>
            <div className="flex justify-around">
                <SamplePieDonutChart />
                <div className="w-[400px] flex justify-center">
                    <RatingTotal />
                </div>
            </div>
        </div>
    );
}

export default StatPage;