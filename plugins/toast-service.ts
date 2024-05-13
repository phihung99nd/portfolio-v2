// @ts-ignore
import ToastService from "primevue/toastservice/toastservice.esm";


export default defineNuxtPlugin(app => {
    app.vueApp.use(ToastService)
})
