import CustomerDayChart from "../chart/CustomerDayChart";
import PieChart from "../chart/PieChart";
import SamplePieDonutChart from "../chart/PieDonutChart";
import RetrospectChart from "../chart/RetrospectChart";

function StatPage() {
    return (
        <div className="pt-2 flex-1 flex flex-col">
            <p>สถิติทั่วไป</p>
            <div className="flex justify-around items-center my-6">
                <CustomerDayChart />
                <PieChart />
            </div>
            <div className="flex justify-around items-center">
                <RetrospectChart />
                <SamplePieDonutChart />
            </div>
        </div>
    );
}

export default StatPage;