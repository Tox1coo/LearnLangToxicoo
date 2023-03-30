export default defineEventHandler(async (event) => {
    const url = (event.node.req.url as string).replace(/^\/api/, '')
    console.log(url);
    console.log(22);
    return await $fetch(url)
})