import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "../../Type/cardType";
import ActualCard from "./ActualCard";

interface AvailableProps {
  card: Icard[];
  selectedCards: Icard[];
  setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const Available = ({ card, selectedCards, setSelectedCards,}: AvailableProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">{card.map((card: Icard) => (
        <ActualCard key={card.name} card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
        )
        )}
    </div>
  );
};

export default Available;