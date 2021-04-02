import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const commonApi = {
    getSpecificItem(species: string, id: string){
        return instance.get(`${species}/${id}`)
    },
    getNextPage(species: string, page: number){
        return instance.get(`${species}/?page=${page}`)
    }

    /*"http://swapi.dev/api/people/?page=2"*/
}

export const peopleApi = {
    getAllPeople(){
        return instance.get(`people`)
    }
}

export const planetsApi = {
    getAllPlanets(){
        return instance.get(`planets`)
    }
}

export const starshipsApi = {
    getAllStarships(){
        return instance.get(`starships`)
    }
}

export const vehiclesApi = {
    getAllVehicles(){
        return instance.get(`vehicles`)
    }
}


