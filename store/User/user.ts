import {useDataBase} from "~/store/DataBase/db";
import {User} from "@supabase/gotrue-js";
import {Ref} from "vue";
export const useUserStore = defineStore('user', {
    state: () => ({
        user: <UserInterface> {},
        isAuthorized: false as boolean,
        errorMessage: '' as string,
        correctMessage: '' as string,
        userAvatar: '' as string
    }),

    getters: {
        getAvatar():string {
            return this.userAvatar;
        }
    },

    actions: {

        async loginUser(loginUser:LoginUser):Promise<boolean> {
            const client = useSupabaseClient();
            const {data, error} = await client.auth.signInWithPassword({
                email: loginUser.email,
                password: loginUser.password,
            })
            const db = useDataBase()
            if(error) {
                console.log(error.name)
                console.log(error.message)
                this.errorMessage = error.message;
                return true
            }
            this.correctMessage= 'correct-message.login';
            const userSupabase = useSupabaseUser();
            setTimeout(() => {
                this.getAvatarUser(userSupabase);
                this.isAuthorized = true;
            }, 500)
            return false
        },
        async authUser(authUser: AuthUser):Promise<boolean> {
            const client = useSupabaseClient()
            const db = useDataBase();
            const dublicateEmail:boolean = await db.checkEmailUser(authUser.email);
            if(!dublicateEmail) {
                const {data, error} = await client.auth.signUp({
                    email: authUser.email,
                    password: authUser.password,
                    options: {
                        data: {
                            name: authUser.name,
                            avatars: 'default/avatars.png',
                            gender: 'Male',
                        }
                    }
                })
                if(error) {
                    this.errorMessage = error.message;
                    return true
                }
                const errorUser = db.setUserEmail(authUser.email, data.user.id);
            } else {
                this.errorMessage = 'dublicate_email';
                return true;
            }
            this.correctMessage= 'correct-message.auth';
            return false

        },
        async logOutUser():Promise<void> {
            const client = useSupabaseClient()
            const {error} = await client.auth.signOut();
            this.userAvatar = '';
            this.isAuthorized = false;
        },

        changeStatusAuthorizedUser(status: boolean) {
            this.isAuthorized = status
        },
        async retrieveSession():Promise<void> {
            const client = useSupabaseClient()
            const { data, error } = await client.auth.getSession()
        },

        async getAvatarUser(user:Ref<User | null>):Promise<void> {
            const client = useSupabaseClient()
            const {data} =  client.storage.from('avatars').getPublicUrl(user.value?.user_metadata.avatars)
            this.userAvatar = data.publicUrl
        }
    }
})