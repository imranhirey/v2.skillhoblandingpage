import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://apiv2.skillhob.com`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});


class Apicaller {


     registercourse(data) {
    return apiClient.post("/courses/register", data);
}


}

    


let apicaller= new Apicaller();
export default apicaller;


    
