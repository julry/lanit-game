import { Game } from "../shared/game";
import pic from "../../assets/images/game3.svg";
import bg from "../../assets/images/game3bg.png";

export const Game3 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                2: 'Работа под\nначалом\nлучших\nруководителей',
                4: 'Управление\nталантами',
                10: 'Наставничество',
                13: 'Подготовка\nбудущих\nлидеров',
            }}
            initialPuzzles={
                [1, 14, 3, 7, 0, 15, 6, 10, 9, 12, 2, 11, 4, 8, 5, 13]
            }
            bg={bg}
            level={3}
        />
    )
}