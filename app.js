const Convertion = {
    template: '#convertion',
    name: 'convertion',
}

const About = {
    template: '#about',
    name: 'about',

}

const router = new VueRouter({
    routes: [
        { path:'/', component: Convertion, name: 'convertion' },
        { path: '/about', component: About, name: 'about' }
    ]
});

const vue = new Vue({
    router,
}).$mount('#app');