const Degres = {
    template: '#degres',
    name: 'degres'
}

const Greatness = {
    template: '#greatness',
    name: 'greatness'
}

const router = new VueRouter({
    routes: [
        { path: '/degres', component: Degres, name: 'degres' },
        { path: '/greatness', component: Greatness, name: 'geatness' }
    ]
})

const vue  = new Vue({
    router,
}).$mount('#app')