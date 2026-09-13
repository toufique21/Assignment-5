import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "../../Type/cardType";
import { TbTrash } from "react-icons/tb";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SelectedProps {
  selectedCards: Icard[];
  setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const Selected = ({selectedCards, setSelectedCards,}: SelectedProps) => {

  const handleCards = (cardName: string) => {
    const remainingCards = selectedCards.filter((card) => card.name !== cardName); 
    setSelectedCards(remainingCards);
    toast.error(`${cardName} has been removed`);
  };

  const handleRemoveAll = () => {
    setSelectedCards([]);
    toast.error(`All Removed`);
  }

  return (
    <div>
      <div className="border border-gray-100 rounded-2xl p-6 shadow-xs my-10">
        <h2 className="font-semibold text-xl">Your Stack</h2>
        <div className="text-xs font-thin py-2">
          <p className="text-gray-400">{selectedCards.length === 0? "No technologies selected yet":
           `${selectedCards.length} technologies selected`}</p>
        </div>
        {selectedCards.length === 0 ? (
          <div className="flex justify-center border-gray-300 border border-dashed rounded-2xl px-4 py-6 mt-4">
            <p className="text-gray-400">Your Stack is empty</p>
          </div>) : (
          selectedCards.map((card) => (
            <div key={card.name} className="flex justify-between border rounded-2xl border-gray-200 
            rounded-2xl p-4 mt-4 shadow-lg shadow-fuchsia-100">
              <div className="flex items-center  gap-3">
                <div className="w-10"><img src={card.icon} alt="" /></div>
                <div>
                  <p className="font-semibold">{card.name}</p>
                  <p className="font-thin text-xs">{card.category}</p>
                </div>
              </div>
              <button onClick={() => handleCards(card.name)}className="flex justify-center items-center text-red-500">
                <RxCross1 />
              </button>
            </div>
            
          ))
        )}
        {selectedCards.length === 0 ? "" : <button onClick={handleRemoveAll}
        className="border border-gray-200 w-full py-2 rounded text-red-500 mt-4 text-sm font-semibold">
            Remove All</button>}
        
      </div>
    </div>
  );
};

export default Selected;