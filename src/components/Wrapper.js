function Wrapper({ state, click, bgColor = "" }) {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-30 ${bgColor}
            ${state ? "opacity-100" : "opacity-0 invisible"}`}
            style={{ "transition": "0.3s ease-out" }}
            onClick={click} />
    );
}

export default Wrapper;