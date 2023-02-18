function Button({ children, bgColor, textColor = "text-white", width = "w-fit", font, click }) {
    return (
        <div className={`${bgColor} ${width} ${font} ${textColor} flex justify-center py-2 px-4 rounded-md text-sm shadow-md hover:cursor-pointer`}
            onClick={click}>
            {children}
        </div>
    );
}

function ButtonSubmit({ bgColor, textColor = "text-white", width = "w-fit", font, title }) {
    return (
        <input className={`${bgColor} ${width} ${font} ${textColor} flex justify-center py-2 px-4 rounded-md text-sm shadow-md hover:cursor-pointer`}
            type="submit"
            value={title}>
        </input>
    );
}

function ButtonTransparent({ color = "black", width = "w-fit", click, children, css }) {
    return (
        <div className={`${width} p-2 text-center text-sm bg-white rounded-md border-2 border-[#c7c7c7] cursor-pointer hover:border-[#d7d7d7] ${css}`}
            onClick={click}>
            {children}
        </div>
    );
}

function ButtonHover({ children, Color, click }) {
    return (
        <div className={`w-24 p-2 bg-${Color} rounded-md border-2 border-${Color} text-center text-white text-sm cursor-pointer hover:text-${Color} hover:bg-white transition ease-in-out duration-150`}
            onClick={click}>
            <p>{children}</p>
        </div>
    );
}

export { Button, ButtonSubmit, ButtonTransparent, ButtonHover };