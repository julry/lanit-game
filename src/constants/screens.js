import { Final } from "../components/screens/final";
import { Game1 } from "../components/screens/game1";
import { Game2 } from "../components/screens/game2";
import { Game3 } from "../components/screens/game3";
import { Game4 } from "../components/screens/game4";
import { Game5 } from "../components/screens/game5";
import { Intro } from "../components/screens/intro";
import { PostGame1 } from "../components/screens/post-game1";
import { PostGame2 } from "../components/screens/post-game2";
import { PostGame3 } from "../components/screens/post-game3";
import { PostGame4 } from "../components/screens/post-game4";
import { PostGame5 } from "../components/screens/post-game5";

import finalbg from "../assets/images/finalbg.svg";
import game1 from "../assets/images/game1.svg";
import game1bg from "../assets/images/game1bg.png";
import game1final from "../assets/images/game1final.png";
import game1finalbg from "../assets/images/game1finalbg.svg";
import game2 from "../assets/images/game2.svg";
import game2bg from "../assets/images/game2bg.png";
import game2final from "../assets/images/game2final.png";
import game2finalbg from "../assets/images/game2finalbg.svg";
import game3 from "../assets/images/game3.svg";
import game3bg from "../assets/images/game3bg.png";
import game3final from "../assets/images/game3final.png";
import game3finalbg from "../assets/images/game3finalbg.svg";
import game4 from "../assets/images/game4.svg";
import game4bg from "../assets/images/game4bg.png";
import game4final from "../assets/images/game4final.png";
import game4finalbg from "../assets/images/game4finalbg.svg";
import game5 from "../assets/images/game5.svg";
import game5bg from "../assets/images/game5bg.png";
import game5final from "../assets/images/game5final.png";
import game5finalbg from "../assets/images/game5finalbg.svg";

export const GAME1_INDEX = 1;
export const GAME2_INDEX = 3;
export const GAME3_INDEX = 5;
export const GAME4_INDEX = 7;
export const GAME5_INDEX = 9;
export const FINAL_INDEX = 11;

export const screens = [
    {
        id: 0,
        component: Intro
    },
    {
        id: GAME1_INDEX,
        component: Game1
    },
    {
        id: 2,
        component: PostGame1
    },
    {
        id: GAME2_INDEX,
        component: Game2
    },
    {
        id: 4,
        component: PostGame2
    },
    {
        id: GAME3_INDEX,
        component: Game3
    },
    {
        id: 6,
        component: PostGame3
    },
    {
        id: GAME4_INDEX,
        component: Game4
    },
    {
        id: 8,
        component: PostGame4
    },
    {
        id: GAME5_INDEX,
        component: Game5
    },
    {
        id: 10,
        component: PostGame5
    },
    {
        id: FINAL_INDEX,
        component: Final
    },
];


export const preloadImages = [
    game1, game1bg, game1final, game1finalbg, game2, game2bg, game2final, game2finalbg,
    game3, game3bg, game3final, game3finalbg, game4, game4bg, game4final, game4finalbg,
    game5, game5bg, game5final, game5finalbg, finalbg
];