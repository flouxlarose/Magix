export default function Card({card, onClick, isSelected = false, disabled = false, className = ""}) {
    const isSleeping = card.state == "SLEEP";
    const hasTaunt = card.mechanics.includes("taunt");
    const hasStealth = card.mechanics.includes("stealth");


    return  (
        <div 
            onClick={disabled ? undefined : onClick}
            className={
                "relative flex flex-col justify-between w-32 h-44 p-2 rounded-lg border-2 bg-slate-800 text-white select-none " +
                (isSelected ? "border-yellow-400 scale-105 " : hasTaunt ? "border-amber-500 " : "border-slate-500 ") +
                (hasStealth ? "opacity-75 " : "") +
                (disabled ? "opacity-50 cursor-not-allowed " : "cursor-pointer hover:scale-105 ") +
                className
            }
        >
            {/* haut de la carte */}
            <div className="flex justify-between items-center">
                {/* COST */}
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-xs font-bold">
                    {card.cost}
                </span>
                {/* STATE */}
                {card.state && (
                    <span className="text-[10px] px-1 rounded bg-black/50">
                        {isSleeping ? "SLEEP" : "IDLE"}
                    </span>
                )}
            </div>

            {/* centre de la carte */}
            <div className="flex flex-wrap gap-1 justify-center my-1">
                {/* MECHANICS */}
                {card.mechanics.map((mech, index) => (
                    <span key={index} className="text-[10px] px-1 bg-slate-700 rounded">
                        {mech}
                    </span>
                ))}
            </div>

            {/* bas de la carte */}
            <div className="flex justify-between items-center font-bold text-sm">
                {/* ATTACKS */}
                <span className="px-1.5 py-0.5 rounded bg-amber-700">
                    {card.atk}
                </span>
                {/* HP */}
                <span className={
                    "px-1.5 py-0.5 rounded bg-red-800 " +
                    (card.hp < card.baseHP ? "text-red-300" : card.hp > card.baseHP ? "text-green-300" : "")
                }>
                    {card.hp}
                </span>
            </div>
        </div>
    );
}