
import Dashboard from './dashboard/Dashboard.vue'
import Details from './details/Details.vue'
import { Options, Vue } from 'vue-class-component';
import {ConsuptionValueService} from "@/service/ConsuptionValueService";

@Options({components: {Dashboard, Details}})
export default class Home extends Vue{

    showDetails = true;

    showDetailsOfResource(dashboard:any){
        this.showDetails = true;
        const details:any = this.$refs.Details;
        details.loadDetailsForResource(dashboard);

    }







}