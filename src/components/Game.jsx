export function Game(active) {
    return (
        <div className="fixed border-7 border-lk-3 rounded-xl w-163.75 h-163.5 overflow-hidden scale-50 md:scale-75 lg:scale-125 animate-slidein">
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
    )
}