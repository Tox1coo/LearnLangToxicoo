import {useUserStore} from "~/store/User/user";
import http from "~/apis/http";
import axios from "axios";
import {$fetch} from "ofetch";
import {useLingvoApi} from "~/store/Lingvo/apiLingvo";

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if(user.value) {
        useUserStore().isAuthorized = true
        useUserStore().getAvatarUser(user)
    }

    // console.log(http.post('v1.1/authenticate'))
    // axios.post('https://developers.lingvolive.com/api/v1.1/authenticate', {
    //     headers: {
    //         Authorization: `Basic NGE4OGEwZDMtMmQ5ZC00YmZmLTk3MzYtMDQ1M2NlNzFkOGZjOjNmZjFmNjU2ZjY2NTQ1OTc5YWZkMzc5MGE3NDczMTU4`
    //     }
    // })
    const response =  $fetch('/api/lang', {
        method: "post"
    })
    response.then((response) => {
        useLingvoApi().token = response.body
        console.log(useLingvoApi().token)
    })

})
//https://api.dictionaryapi.dev/api/v2/entries/en/word

