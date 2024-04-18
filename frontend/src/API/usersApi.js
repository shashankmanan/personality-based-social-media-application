import axios from 'axios'

export const createUserApi = async (formData) => {
    const baseURL = "http://localhost:5000/api/users/create"
    console.log(formData)
    try {
        const response = await axios.post(baseURL,formData)
        console.log(response)
        if(response.data.error) {
            switch(response.data.error) {
                case "KEY_ERROR" :
                    console.log(response.data.attribute)
                    return { 
                        "proceed" : false,
                        "error" : "KEY_ERROR" ,
                        "attribute" : response.data.attribute
                    }
                default: 
                    return {
                        "proceed" : false,
                        "error" : "SERVER_ERROR" , 
                    }
            }
        }
        localStorage.setItem('auth' , response.data.token)
        localStorage.setItem('username' , response.data.LOGGED_IN)
    } catch(error) {
        console.log({"something went wrong..." : error})
        console.log("in error")
        return {"proceed" : false , "error" : "SERVER_ERROR" , "errorDesc" : error} 
    }

    return { "proceed" : true}
}

export const signInUser = async (data)  => {
    const baseURL = "http://localhost:5000/api/users/signin" 
    try  {
        const response = await axios.post(baseURL,data)
        console.log(response)
        if(response.status == 201) {
            localStorage.setItem('auth' , response.data.token)
            localStorage.setItem('username' , response.data.LOGGED_IN)
            return {"isAuth" : true , error : ""}
        } else {
            switch(response.data.error) {
                case "USERNAME_NOT_FOUND" : return {"isAuth" : false , error : "Wrong Username entered!"}
                case "WRONG_PASSWORD" : return {"isAuth" : false , error : "Wrong password entered!"}
                default : return {"isAuth" : false , error : "Something went wrong please try again"}
            }

        }
    }catch(error) {
        return {"isAuth" : false , error : "SERVER_ERROR"}
    }
}