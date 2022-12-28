function DropdownButton({ click, children }) {
    return (
        <div className="p-1 cursor-pointer border-transparent border-2 rounded-md hover:border-[#E0E0E0]"
            onClick={click}>
            {children}
        </div>
    );
}

function DropdownBody({ state, offset="left-0", children }) {
    return (
        <div className={`min-w-[200px] bg-white px-2 py-2 border-2 border-[#E0E0E0] rounded-md shadow-xl absolute top-10 z-50 ${offset}
            ${state ? "block" : "hidden"}`}>
            {children}
        </div>
    );
}

function DropdownMenu({ click, children }) {
    return (
        <p className="py-2 px-4 rounded-md hover:bg-[#F4F4F4] hover:cursor-pointer"
            onClick={click}>
            {children}
        </p>
    );
}

function Dropdown({ children }) {
    return (
        <div className="relative">
            {children}
        </div>
    );
}

export { DropdownButton, DropdownBody, DropdownMenu, Dropdown };