function Button({ children, bgColor, textColor = "text-white", width = "w-full", font, click }) {
    return (
        <div className={`${bgColor} ${width} ${font} ${textColor} flex justify-center py-2 px-4 rounded-md text-sm shadow-md hover:cursor-pointer`}
            onClick={click}>
            {children}
        </div>
    );
}

<svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>

function ButtonSubmit({ bgColor, textColor = "text-white", width = "w-full", font, link }) {
    return (
        <input type="submit" className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm shadow-md`}>
        </input>
    );
}

function ButtonTransparent({ color, width = "w-fit", click, children }) {
    return (
        <div className={`${width} border-${color} text-${color} border text-center py-1 px-1 rounded-md cursor-pointer hover:bg-white`}
            onClick={click}>
            {children}
        </div>
    );
}

export { Button, ButtonSubmit, ButtonTransparent };