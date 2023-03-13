import { useSelector } from "react-redux";

function TableHead({ children }) {
    return (
        <p className="text-xs text-center text-[#7d7d7d] w-[20%]">
            {children}
        </p>
    );
}

function TableBody({ children, condition }) {
    const authReducer = useSelector(state => state.authReducer);
    return (
        <p className={`flex justify-center w-[20%] ${authReducer.role === "admin" && condition !== "head" && "last:invisible group-hover:visible"}`}>
            {children}
        </p>
    );
}

function TableRow({ children, condition, css }) {
    return (
        <div className={`relative flex justify-around items-center border-b-2 border-[#E0E0E0] ${css} ${condition === "head" ? "pb-4" : "h-[62px] py-2 hover:bg-[#F4F4F4]"} group`}>
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