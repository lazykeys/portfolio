import { twMerge } from "tailwind-merge"

let previousState = null;

export function Game({active}) {
    const base = twMerge("fixed flex items-center justify-center bg-lk-0 w-screen h-screen opacity-0", "game");

    return (
        <div className={twMerge(base, toggleGame(active))}>
            <div className={"border-7 border-lk-3 rounded-xl w-163.75 h-163.5 overflow-hidden scale-50 md:scale-75 lg:scale-125"} >
                <iframe
                    src="https://www.lexaloffle.com/bbs/widget.php?pid=lazylaunch"
                    width="675" 
                    height="800"
                    overflow="hidden"
                    allowFullScreen
                    style={{
                        outline: "none"
                    }}
                />
            </div>
        </div>
    )
}

function toggleGame(active)
{
    if (previousState === null)
    {
        previousState = active;
        return "";
    }
    else
    {
        const className = 
            previousState ? 
            "animate-fadeout":
            "animate-fadein"
        previousState = active;
        return className;
    }
}