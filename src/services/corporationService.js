import axios from "axios";

export default class CorporationService{

    getCorporations(){
        return axios.get("http://localhost:8080/api/corporations/getall")
    }
}