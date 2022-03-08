import {Vue} from "vue-class-component";
import {ResourceType} from "@/models/ResourceType";
import {DashboardService} from "@/service/DashboardService";
import moment from "moment/moment";

export default class Dashboard extends Vue {

    dashboardLoaded = false;
    dashboards: ResourceType[] = [];
    animationDelay = 0;

    async created() {
        await this.loadAllResources()
    }

    async loadAllResources() {

        const dashboadService = new DashboardService();
        this.dashboards = await dashboadService.getDashboardItems();
        this.dashboardLoaded = true;
    }

    //@ToDo use filter
    formatDate(date:Date){
        return moment(date).format("ll")
    }

    showDetailsOfResource(dashboard:any){
       this.$emit("showDetailsOfResource", dashboard)

    }

}



