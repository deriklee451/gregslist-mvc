import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { homesService } from "../Services/HomesService.js"


function _drawHomes() {
    let template = ''
    appState.homes.forEach(h => template += h.cardTemplate)
    setHTML('listings', template)
}




export class HomesController {
    constructor() {
        console.log('test');

        appState.on('homes', _drawHomes)
    }



    showHomes() {
        _drawHomes()
    }

    async removeHome(homeId) {
        if (await Pop.confirm('Are you sure want to delete this house')) {
            homesService.removeHome(homeId)

        }
    }


}

