import FriedEgg from "../assets/Fried_Egg.PNG";
import ScrambledEgg from "../assets/Scrambled_Egg.PNG";
import SoftBoiledEgg from "../assets/Soft_Boiled_Egg.PNG";
import HardBoiledEgg from "../assets/Hard_Boiled_Egg.PNG";

export const eggTypes = {
  fried: {
    label: "Fried Egg",
    time: 180, // 3 minutes
    image: FriedEgg,
  },
  scrambled: {
    label: "Scrambled Eggs",
    time: 300, // 5 minutes
    image: ScrambledEgg,
  },
  soft: {
    label: "Soft-Boiled Egg",
    time: 300, // 5 minutes
    image: SoftBoiledEgg,
  },
  hard: {
    label: "Hard-Boiled Egg",
    time: 600, // 10 minutes
    image: HardBoiledEgg,
  },
};