function BlockMobile({ children }) {
    return (
        <div className="mt-[50px] px-6 py-4">
            <div className="max-w-sm mx-auto">
                {children}
            </div>
        </div>
    );
}

function BlockDesktop({ children }) {
    return (
        <div className="bg-bg-desktop px-0 min-w-[1024px] max-w-[1920px] mx-auto flex min-h-screen xl:px-20">
            {children}
        </div>
    );
}

function BlockDesktopRight({ children }) {
    return (
        <div className="py-4 w-full flex flex-col items-center h-screen">
            {children}
        </div>
    );
}

function HeadDesktop({ children }) {
    return (
        <div className="bg-fha-desktop py-4 px-8 mr-4 mb-4 rounded-xl shadow-xl text-white text-xl font-bold w-full xl:max-w-[1280px] h-[60px]">
            {children}
        </div>
    );
}

function ContentDesktop({ children }) {
    return (
        <div className="flex flex-col bg-white min-h-[723px] py-3 px-8 mr-4 rounded-xl shadow-xl w-full xl:max-w-[1280px] " style={{ height: `calc(100% - 77px)` }}>
            {children}
        </div>
    );
}

function HeadContentDesktop({ children }) {
    return (
        <div className="pb-3 mb-4 border-b-2 border-[#E0E0E0] flex justify-between items-center h-[54px]">
            {children}
        </div>
    );
}

export { BlockMobile, BlockDesktop, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop };