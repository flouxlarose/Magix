export default function Button({className = "", disabled = false, onClick, children}) {

    return  <button disabled={disabled} onClick={onClick} className={"border border-amber-600 p-1 px-2 hover:scale-125 hover:outline-4 cursor-pointer " + (disabled ? " opacity-50 " : "") + className}>
                {children}
            </button>
}