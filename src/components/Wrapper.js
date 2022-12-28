function Wrapper({ state, click, bgColor="" }) {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${bgColor}
            ${state ? "block" : "hidden"}`}
            onClick={click} />
    );
}

export default Wrapper;