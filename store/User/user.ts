import {useSupabaseClient} from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient";


export const userStore = defineStore({
    id:'user',
    state: () => ({
        user: <UserInterface> {
            uid: '0',
            name: '',
            email: '',
            gender: 'Male',
            created_at: Date.now().toString()
        },
        isAuthorized: false as boolean,
        client: useSupabaseClient()
    }),
    actions: {
        async loginUser(loginUser:LoginUser) {
            const {data, error} = await this.client.auth.signInWithPassword({
                email: loginUser.email,
                password: loginUser.password,
            })

        },

        async authUser(authUser: AuthUser) {
            const {data, error} = await this.client.auth.signUp({
                email: authUser.email,
                password: authUser.password,
                options: {
                    data: {
                        name: authUser.name
                    }
                }
            })

            console.log(data);
            this.user = {
                uid: data.user.id,
                name: authUser.name,
                email: authUser.email,
                gender: 'Male',
                created_at: data.user.created_at,
            }
            // this.client.from('users').insert()

        }

    }
})