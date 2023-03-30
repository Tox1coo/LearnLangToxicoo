import { ofetch } from 'ofetch'

const http = {
    post(url: string) {
        return new Promise((resolve, reject) => {
            ofetch(url, {
                baseURL: '/api',
                method: 'POST',
                headers: {
                    Authorization: `Basic NGE4OGEwZDMtMmQ5ZC00YmZmLTk3MzYtMDQ1M2NlNzFkOGZjOjNmZjFmNjU2ZjY2NTQ1OTc5YWZkMzc5MGE3NDczMTU4`,
                },
                onResponse({ response }) {
                    if (response.ok) {
                        resolve(response._data)
                    }
                },
            }).catch(err => {
                reject(err)
            })
        })
    },
}
export default http