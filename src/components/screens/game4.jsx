import { Game } from "../shared/game";
import pic from "../../assets/images/game4.svg";
import bg from "../../assets/images/game4bg.png";
import { useProgress } from "../../contexts/ProgressContext";
import { GAME4_INDEX } from "../../constants/screens";

export const Game4 = () => {
    const { lastScreenIndex } = useProgress();

    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'ДМС со\nстоматологией',
                3: 'Карьерный\nцентр',
                8: 'Вебинары\nс врачами,\nмарафоны\nздоровья',
                14: 'Консультации\nс юристами и\nпсихологами',
            }}
            initialPuzzles={
                [1, 6, 4, 14, 3, 9, 15, 2, 7, 13, 10, 11, 8, 5, 12, 0]
            }
            bg={bg}
            level={4}
            isAlreadyFinished={lastScreenIndex > GAME4_INDEX}
        />
    )
}