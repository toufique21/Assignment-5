import type { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { Icard } from "../../Type/cardType";
import { toast } from "react-toastify";

interface ActualProps {
    card: Icard;
    selectedCards: Icard[];
    setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const ActualCard = ({ card, selectedCards, setSelectedCards, }: ActualProps) => {

    let isSelected = false;

    selectedCards.forEach((selectedCard) => {
        if (selectedCard.name === card.name) {
            isSelected = true;
        }
    });

    const handleAddToStack = () => {
        if (isSelected) {
            return;
        }
        toast(`${card.name} is Added`)
        setSelectedCards([...selectedCards, card]);
    };

    return (
        <div>
            <div className={isSelected ? "border border-pink-300 rounded-2xl p-6 shadow-lg shadow-rose-200" :
                "border border-gray-100 rounded-2xl p-6 shadow-xs"}>

                <div className="flex justify-between">
                    <div className="w-8">
                        <img src={card.icon} alt="" />
                    </div>

                    <div className="flex items-center">
                        <p className="bg-blue-100 border border-blue-300 rounded-2xl px-4 py-1 text-xs">{card.badge}</p>
                    </div>
                </div>

                <h2 className="mt-5 text-2xl font-semibold">{card.name}</h2>
                <p className="mt-2 font-thin text-sm">{card.description}</p>
                <hr className="text-gray-100 mt-6" />
                <div className="flex justify-between items-center text-xs mt-2">
                    <p className="bg-gray-100 p-1 rounded">{card.category}</p>
                    <p className="font-thin">{card.difficulty}</p>
                    <div className="flex items-center gap-1">
                        <FaStar />
                        <p>{card.rating}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button 
                    onClick={handleAddToStack} disabled={isSelected}
                        className={isSelected? "bg-red-100 text-pink-400 rounded-[10px] w-full py-2 mt-4" :
                            "text-white bg-black rounded-[10px] w-full py-2 mt-4"}>
                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActualCard;