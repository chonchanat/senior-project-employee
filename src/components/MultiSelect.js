function MultiSelect({ children }) {
    return (
        <div className="relative w-fit z-50 w-[364px]">
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
                            : data.name[0].toLowerCase().includes(search);
                    })
                    .slice(0, 5)
                    .map((data) => (
                        <p key={data.id} className="py-2 px-6 hover:bg-[#F4F4F4]"
                            onClick={() => click(data)}>{data.name[0]}</p>
                    ))
            }
        </div>
    )

}

export { MultiSelect, MultiSelectBody };