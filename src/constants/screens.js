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

export const screens = [
    {
        id: 0,
        component: Intro
    },
    {
        id: 1,
        component: Game1
    },
    {
        id: 2,
        component: PostGame1
    },
    {
        id: 3,
        component: Game2
    },
    {
        id: 4,
        component: PostGame2
    },
    {
        id: 5,
        component: Game3
    },
    {
        id: 6,
        component: PostGame3
    },
    {
        id: 7,
        component: Game4
    },
    {
        id: 8,
        component: PostGame4
    },
    {
        id: 9,
        component: Game5
    },
    {
        id: 10,
        component: PostGame5
    },
    {
        id: 11,
        component: Final
    },
];


export const preloadImages = [];