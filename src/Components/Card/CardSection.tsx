import { use, useState } from "react";
import type { Icard } from "../../Type/cardType";
import Available from "./Available";
import Selected from "./Selected";

interface CardProps {
  cardPromise: Promise<Icard[]>;
}

const Card = ({ cardPromise }: CardProps) => {
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  const card = use(cardPromise);

  return (
    <div className="grid grid-cols-4 container mx-auto gap-4">
      <div className="col-span-3">
        <Available card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
      </div>

      <div className="col-span-1">
        <Selected selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
      </div>
    </div>
  );
};

export default Card;