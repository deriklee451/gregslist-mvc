import { appState } from "../AppState.js";
import { Home } from "../Models/Home.js";

class HomesService {

    removeHome(homeId) {
        let filteredArray = appState.homes.filter(h => h.id != homeId)
        appState.homes = filteredArray
        console.log('New array in AppState:', appState.homes);


    }


}

export const homesService = new HomesService