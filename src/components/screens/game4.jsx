import { Game } from "../shared/game";
import pic from "../../assets/images/game4.svg";
import bg from "../../assets/images/game4bg.png";

export const Game4 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'ДМС со\nстоматологией',
                3: 'Карьерный\nцентр',
                8: 'Вебинары\nс врачами,\nмарафоны\nздоровья',
                14: 'Консультации\nс юристами и\nпсихологами',
            }}
            bg={bg}
            level={4}
        />
    )
}