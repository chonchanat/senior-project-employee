function Button({ children, bgColor, textColor = "text-white", width = "w-fit", font, click }) {
    return (
        <div className={`${bgColor} ${width} ${font} ${textColor} flex justify-center py-2 px-4 rounded-md text-sm shadow-md hover:cursor-pointer`}
            onClick={click}>
            {children}
        </div>
    );
}

function ButtonSubmit({ bgColor, textColor = "text-white", width = "w-fit", font, click }) {
    return (
        <input className={`${bgColor} ${width} ${font} ${textColor} flex justify-center py-2 px-4 rounded-md text-sm shadow-md hover:cursor-pointer`}
            type="submit"
            value="Login">
        </input>
    );
}

// function ButtonSubmit({ bgColor, textColor = "text-white", width = "w-full", font, link }) {
//     return (
//         <input type="submit" className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm shadow-md cursor-pointer`}>
//         </input>
//     );
// }

function ButtonTransparent({ color = "black", width = "w-fit", click, children, css }) {
    return (
        // <div className={`${width} border-${color} text-${color} border text-center p-1 rounded-md cursor-pointer hover:bg-white`}
        <div className={`${width} p-2 text-center text-sm bg-white rounded-md border-2 border-[#c7c7c7] cursor-pointer hover:border-[#d7d7d7] ${css}`}
            onClick={click}>
            {children}
        </div>
    );
}

function ButtonHover({ children, color, click }) {
    return (
        <div className={`w-24 p-2 text-center text-sm text-white rounded-md bg-${color} border-2 border-${color} cursor-pointer hover:bg-white hover:text-${color} hover:border-2`}
            onClick={click}>
            {children}
        </div>
    );
}

export { Button, ButtonSubmit, ButtonTransparent, ButtonHover };