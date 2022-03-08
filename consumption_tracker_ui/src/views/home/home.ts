
import Dashboard from './dashboard/Dashboard.vue'
import Details from './details/Details.vue'
import { Options, Vue } from 'vue-class-component';

@Options({components: {Dashboard, Details}})
export default class Home extends Vue{
    selectedDetailResourceId = 0

    showDetailsOfResource(resourceid:number){
        this.selectedDetailResourceId = resourceid;
        const details:any = this.$refs.Details;
        details.loadDetailsForResource(resourceid);


    }






}