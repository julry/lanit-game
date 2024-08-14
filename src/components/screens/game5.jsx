import { Game } from "../shared/game";
import pic from "../../assets/images/game5.svg";
import bg from "../../assets/images/game5bg.png";
import { useProgress } from "../../contexts/ProgressContext";
import { GAME5_INDEX } from "../../constants/screens";

export const Game5 = () => {
    const { lastScreenIndex } = useProgress();

    return ( 
        <Game  
            picture={pic} 
            phrases={{
                2: 'Вечерние\nкинопоказы\nв тематические\nдни',
                4: 'Кибер-\nспортивная\nатмосфера',
                7: 'Музей\nс работами\nДали\nи Пикассо',
                10: 'Экскурсии\nпо Москве\nс коллегами',
            }}
            initialPuzzles={
                [0, 13, 12, 11, 10, 15, 5, 2, 14, 1, 4, 6, 9, 7, 3, 8]
            }
            bg={bg}
            level={5}
            isAlreadyFinished={lastScreenIndex > GAME5_INDEX}
        />
    )
}