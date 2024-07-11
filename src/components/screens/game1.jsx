import { Game } from "../shared/game";
import pic from "../../assets/images/game1.svg";
import bg from "../../assets/images/game1bg.png";

export const Game1 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'Технологии\nкак искусство',
                7: 'Бежим\nбыстрее\nрынка',
                10: 'В режиме\nинноваций',
                12: 'Прокачаем\nот джуна\nдо эксперта',
            }}
            initialPuzzles={
                [2, 5, 4, 0, 10, 1, 6, 9, 12, 7, 3, 13, 8, 11, 15, 14]
            }
            bg={bg}
            level={1}
            isFirstTimeRules 
        />
    )
}