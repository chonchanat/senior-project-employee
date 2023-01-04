function MultiSelect({ children }) {
    return (
        <div className="relative w-fit z-50 w-[360px]">
            {children}
        </div>
    );
}

function MultiSelectBody({ state, data, search, click }) {
    return (
        <div className={`absolute top-[40px] left-0 right-0 w-full bg-white border-2 border-[#E0E0E0] rounded-md shadow-xl z-30 ${!state.multiSearch && "hidden"}`}>
            {
                data
                    .filter((data) => {
                        return search.toLowerCase() === ""
                            ? data
                            : data.name.toLowerCase().includes(search);
                    })
                    .slice(0, 5)
                    .map((data) => (
                        <p key={data.code} className="py-2 px-6 hover:bg-[#F4F4F4]"
                            onClick={() => click(data)}>{data.name}</p>
                    ))
            }
        </div>
    )

}

export { MultiSelect, MultiSelectBody };