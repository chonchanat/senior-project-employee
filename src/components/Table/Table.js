import { useSelector } from "react-redux";

function TableHead({ children }) {
    return (
        <p className="text-sm text-center text-[#7d7d7d] w-[20%]">
            {children}
        </p>
    );
}

function TableBody({ children }) {
    const authReducer = useSelector(state => state.authReducer);
    return (
        <p className={`flex justify-center w-[20%] ${authReducer.role === "administrator" && "last:invisible group-hover:visible"}`}>
            {children}
        </p>
    );
}

function TableRow({ children, condition }) {
    return (
        <div className={`relative flex justify-around items-center border-b-2 border-[#E0E0E0] ${condition === "head" ? "pb-4" : "py-3 hover:bg-[#F4F4F4]"} group`}>
            <div className={`absolute left-0 w-[6px] h-full bg-yellow invisible ${condition === "head" ? "" : "group-hover:visible"}`} />
            {children}
        </div>
    );
}

function DataSection({ children, width }) {
    return (
        <div className={`overflow-auto ${width}`}>
            {children}
        </div>
    );
}

export { TableHead, TableBody, TableRow, DataSection };