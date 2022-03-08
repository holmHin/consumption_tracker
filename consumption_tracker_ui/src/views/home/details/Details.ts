import {Vue, prop} from "vue-class-component";

export default class Details extends Vue{


    loadDetailsForResource(resourceId:number){
        console.log("Load for resourceId: "+resourceId)

    }



}