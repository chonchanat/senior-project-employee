import { useNavigate } from 'react-router-dom';

function Button({ title, bgColor, textColor="text-white", width="w-full", font, link }) {
    
    const navigate = useNavigate();

    function goToLink() {
        if (link){
            navigate("/customer-home")
        }
    }

    return (
        <div>
            <button className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm drop-shadow-md`}
                onClick={() => goToLink()}>
                {title}
            </button>
        </div>
    );
}

function ButtonSubmit({ bgColor, textColor="text-white", width="w-full", font, link }) {
    return (
        <input type="submit" className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm drop-shadow-md`}>
        </input>
    );
}

function ButtonTransparent({color, width="w-fit", click, children}) {
    return (
        <div className={`${width} border-${color} text-${color} border text-center py-1 px-1 rounded-md cursor-pointer hover:bg-white`}
            onClick={click}>
            {children}
        </div>
    );
}

export { Button, ButtonSubmit, ButtonTransparent };