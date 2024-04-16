import axios from 'axios'

export const createUserApi = async (formData) => {
    const baseURL = "http://localhost:5000/api/users/create"
    console.log(formData)
    try {
        const response = await axios.post(baseURL,formData)
        console.log(response)
        if(response.data.error) {
            switch(response.data.error) {
                case "Already Exists" :
                    return { 
                        "proceed" : false,
                        "error" : response.data
                    }
            }
        }
    } catch(error) {
        console.log({"something went wrong..." : error})
    }
    return { "proceed" : true}
}