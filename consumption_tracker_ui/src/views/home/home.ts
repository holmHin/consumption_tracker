import Dashboard from './dashboard/Dashboard.vue'
import Details from './details/Details.vue'
import {Vue} from "vue-class-component";
import Component from 'vue-class-component'


@Component
export default class Home extends Vue{



    showDetailsOfResource(resourceid:number){
        alert("Hi");
    }




}