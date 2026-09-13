import { use } from "react";
import type { Icard } from "../../Type/cardType";
import Available from "./Available";
import Selected from "./Selected";


interface cardProps {
    cardPromise: Promise<Icard[]>;
}

const Card = ({ cardPromise }: cardProps) => {

    const card = use(cardPromise);

    return (
        <div className="grid grid-cols-4 container mx-auto gap-4">
            <div className="grid col-span-3">
                <Available card={card} />
            </div>
            <div className="grid col-span-1">
                <Selected card={card} />
            </div>
        </div>

    );
};

export default Card;