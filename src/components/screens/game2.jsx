import { Game } from "../shared/game";
import pic from "../../assets/images/game2.svg";
import bg from "../../assets/images/game2bg.png";

export const Game2 = () => {
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'Спортзал с\nтренажерами\nи сауной',
                6: 'Футбол,\nволейбол,\nбаскетбол,\nбокс',
                8: 'Беговой\nи лыжный клубы',
                13: 'Йога\nна крыше,\nтеннис,\nшахматный\nклуб',
            }}
            initialPuzzles={
                [5, 0, 13, 1, 10, 14, 3, 15, 4, 8, 9, 2, 7, 12, 11, 6]
            }
            bg={bg}
            level={2}
        />
    )
}