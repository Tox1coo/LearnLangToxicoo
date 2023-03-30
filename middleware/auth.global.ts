import {useUserStore} from "~/store/User/user";

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    useUserStore().retrieveSession()
    if(user.value) {
        useUserStore().isAuthorized = true
        useUserStore().getAvatarUser(user)
    }

})
//https://api.dictionaryapi.dev/api/v2/entries/en/word

