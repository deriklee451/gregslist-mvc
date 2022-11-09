import { generateId } from "../Utils/generateId.js"



export class Home {

  constructor(data) {
    this.id = generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqFootage = data.sqFootage
    this.price = data.price
    this.img = data.img

  }

  get cardTemplate() {
    return `
<div class="col-4 p-4">
          <div class="card">
            <img
              src="${this.img}"
              class="card-img-top card-height" alt="house">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>${this.bedrooms}Bds/${this.bathrooms}Br</span>
                <span>$${this.price}</span>
              </h5>
              <div class="d-flex justify-content-between">
              <button class="btn btn-primary">
                See Details
              </button>
              <button onclick="app.homesController.removeHome('${this.id}')" title="Delete car!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
            </div>
            </div>
          </div>
        </div>
`

  }



}