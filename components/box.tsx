

export function Box({ children, className } : { children: React.ReactNode, className?: string }) {
    return (
        <div className={`${className} flex p-2 transform-gpu transition-all duration-500 hover:shadow-lg  bg-slate-50 shadow-sm bg-opacity-50 rounded-xl justify-between gap-4 items-center`}>
            { children }
        </div>
    )
}