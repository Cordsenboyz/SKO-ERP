import { reactive } from 'vue'

export const store = reactive({
    IsAuthenticated: false
})

export const role = reactive({
    value: ""
})

export const user = reactive({
    data: {
        username: ""
    } 
})