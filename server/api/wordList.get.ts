import axios from "axios";

export default defineEventHandler(async (event) =>{
    const params = getQuery(event);
    console.log(params)
    const wrds = null;
    const response = await fetch('https://developers.lingvolive.com/api/v1/WordList?prefix=mother&srcLang=1033&dstLang=1049&pageSize=5', {
        headers: {
            Authorization: `Bearer ${params.token}`
        }
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
  /*  const response = await axios.get('https://developers.lingvolive.com/api/v1/WordList?prefix=mother&srcLang=1033&dstLang=1049&pageSize=5', {
        headers: {
            Authorization: `Bearer ${params.token}`
        }
    });
    response.then(res => {
        console.log(res.data)
    })
    console.log(response);*/
    return {
        words:data
    }
})