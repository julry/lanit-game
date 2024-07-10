import { Game } from "../shared/game";
import pic from "../../assets/images/game1.svg";
import bg from "../../assets/images/game1bg.png";

export const Game1 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'Технологии как искусство',
                7: 'Бежим\nбыстрее\nрынка',
                10: 'В режиме инноваций',
                12: 'Прокачаем от джуна до эксперта',
            }}
            bg={bg}
            level={1}
            isFirstTimeRules 
        />
    )
}