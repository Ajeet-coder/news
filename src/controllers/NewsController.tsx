import { API_KEY } from "../constants/NewsConstant"

export const queryUrl=(type="arts")=>{
    return `${type}.json?api-key=${API_KEY}`
}