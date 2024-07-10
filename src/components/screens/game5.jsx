import { Game } from "../shared/game";
import pic from "../../assets/images/game5.svg";
import bg from "../../assets/images/game5bg.png";

export const Game5 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                2: 'Вечерние\nкинопоказы\nв тематические\nдни',
                4: 'Кибер-\nспортивная\nатмосфера',
                7: 'Музей\nс работами\nДали\nи Пикассо',
                10: 'Экскурсии\nпо Москве\nс коллегами',
            }}
            bg={bg}
            level={5}
        />
    )
}