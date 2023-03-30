import axios from "axios";

export default defineEventHandler(async (event) => {
    const response = await axios.post('https://developers.lingvolive.com/api/v1.1/authenticate', {
    }, { headers: {
            Authorization: `Basic NGE4OGEwZDMtMmQ5ZC00YmZmLTk3MzYtMDQ1M2NlNzFkOGZjOjNmZjFmNjU2ZjY2NTQ1OTc5YWZkMzc5MGE3NDczMTU4`
        }})
   const body = response.data
    return {
        body
    }
})