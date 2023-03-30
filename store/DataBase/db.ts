import {createClient} from "@supabase/supabase-js";

export const useDataBase = defineStore('supabase',{
    state: () => ({
    }),
    actions: {
        async getUser(userId: number):Promise<void> {
        },
        async checkEmailUser(email: string): Promise<boolean> {
            const supabase = createClient(useRuntimeConfig().public.supabase.url, useRuntimeConfig().public.supabase.key);
            const {data, error} = await supabase.from('users_table_email').select('email').eq('email', email);
            return data?.length === 0 ?  false : true
        },
        async setUserEmail(userEmail:string, userId: string):Promise<void | boolean> {
            const supabase = createClient(useRuntimeConfig().public.supabase.url, useRuntimeConfig().public.supabase.key);
            const { error } = await supabase
                .from('users_table_email')
                .insert({email: userEmail, uuid:userId })
            if(error) {
                return true
            }
            return;
        }
    }
})