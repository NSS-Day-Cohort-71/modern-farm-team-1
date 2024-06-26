import { createAsparagus} from './seeds/asparagus.js';
import { createSoybean} from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat} from './seeds/wheat.js';
import { createPotato} from './seeds/potato.js';
import { createCorn} from './seeds/corn.js';
import { addPlant } from './field.js';

export function plantSeeds(plan) {
    for (let row of plan) {
        for (let plant of row) {
            let seed;
            switch (plant) {
                case "Asparagus":
                    seed = createAsparagus();
                    break;
                case "Corn":
                    seed = createCorn();
                    break;
                case "Potato":
                    seed = createPotato();
                    break;
                case "Soybean":
                    seed = createSoybean();
                    break;
                case "Wheat":
                    seed = createWheat();
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    break;
                default:
                    console.log(`Unknown plant type: ${plant}`);
                    continue;
            }
            addPlant(seed);
        }
    }
}
