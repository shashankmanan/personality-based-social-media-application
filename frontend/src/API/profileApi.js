import axios from "axios"

export const getUserProfile = async (username) => {
    // username = ""
    console.log(`in getUser Profile ${ username } `)
    const baseURL = "http://localhost:5000/api/users/profile/get"
    try {
        const response = await axios.post(baseURL,{"username" : username})
        console.log(response)
        if(response.data.error === "PROFILE_NOT_FOUND")
            return response.data.error
        return response.data
    }
    catch(error) {
        return "SERVER_ERROR"
    }
}
