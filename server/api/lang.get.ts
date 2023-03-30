import axios from "axios";

export default defineEventHandler(async (event) =>{
    let lang = null;
    const params = getQuery(event);
    console.log(params)
    const response = await axios.get('https://developers.lingvolive.com/api/v1/WordList?prefix=mother&srcLang=1033&dstLang=1049&pageSize=5', {
        headers: {
            Authorization: `Bearer dadas`
        }
    });
    console.log(response);
    return {
        lang:lang
    }
})