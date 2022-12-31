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

function BlockDesktopLeft({ children }) {
    return (
        <div className="py-4 flex justify-center">
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
        <div className="bg-fha-desktop py-4 px-8 mr-4 mb-4 rounded-xl drop-shadow-xl text-white text-xl font-bold w-full xl:max-w-[1280px]">
            {children}
        </div>
    );
}

function ContentDesktop({ children }) {
    return (
        <div className="flex flex-col h-[91%] bg-white pt-3 px-8 mr-4 rounded-xl drop-shadow-xl w-full xl:max-w-[1280px]">
            {children}
        </div>
    );
}

function HeadContentDesktop({ children }) {
    return (
        <div className="pb-3 mb-4 border-b-2 border-[#E0E0E0] flex justify-between items-center">
            {children}
        </div>
    );
}

export { BlockMobile, BlockDesktop, BlockDesktopLeft, BlockDesktopRight, HeadDesktop, ContentDesktop, HeadContentDesktop };