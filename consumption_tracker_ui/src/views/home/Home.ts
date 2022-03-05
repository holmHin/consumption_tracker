import {Vue} from "vue-class-component";
import {ResourceType} from "@/models/ResourceType";
import {ResourceTypeService} from "@/service/ResourceTypeService";

export default class Home extends Vue{

    resources: ResourceType[] = [];
    animationDelay=0;

    async created() {
        await this.loadAllResources()
        console.log("Hi")
    }

    delay(){
        this.animationDelay = this.animationDelay+500;
        console.log(this.animationDelay);
        return this.animationDelay;

    }

    async loadAllResources() {

        const resourceTypeService = new ResourceTypeService();
        this.resources = await resourceTypeService.getAllResourceTypes();}
}


