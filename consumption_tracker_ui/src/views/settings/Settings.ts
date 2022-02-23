import {Vue} from "vue-class-component";
import {ResourceType} from "@/models/ResourceType";
import {ResourceTypeService} from "@/service/ResourceTypeService";

export default class Settings extends Vue {

    resources: ResourceType[] = []
    selectedResources: any;
    showNewResourceDialog = false;
    newResourceType: ResourceType;

    async created() {
        this.selectedResources = [];
        const resourceTypeService = new ResourceTypeService();
        this.resources = await resourceTypeService.getAllResourceTypes();
        this.newResourceType = new class implements ResourceType {
            fraction: number;
            id: number;
            incremental = true;
            name: string;
            unit: string;
        }
    }

    deleteSelectedResources() {
        console.log(this.selectedResources);
    }

    openNewResourceDialog() {
        this.showNewResourceDialog = true;
        console.log("Show New!")
    }

    saveNewResourceType() {
        const resourceTypeService = new ResourceTypeService()
        try {
            resourceTypeService.saveNewResourceType(this.newResourceType)

        } catch (e) {
            console.log(e.message)
        }

    }


}