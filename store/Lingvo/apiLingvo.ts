import axios from "axios";

export const useLingvoApi = defineStore('lingvo',{
    state: () => ({
        token: ''
    }),
    actions: {
        async getWordsList(word:string):Promise<void> {
            const response = await axios.get('https://developers.lingvolive.com/api/v1/WordList?prefix=mother&srcLang=1033&dstLang=1049&pageSize=5', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            console.log(response);
        }
    }
})