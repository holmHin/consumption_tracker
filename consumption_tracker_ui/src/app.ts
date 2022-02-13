import {Vue} from "vue-class-component";

export default class App extends Vue {



    public message = '';
    public items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
        {label: 'Capture', icon: 'pi pi-sliders-h', to: '/capture/'},
        {label: 'About', icon: 'pi pi-fw pi-info', to: '/about/'}
    ];
}
