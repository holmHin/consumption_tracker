import {Vue} from "vue-class-component";
import {ResourceType} from "@/models/ResourceType";
import {ResourceTypeService} from "@/service/ResourceTypeService";

export default class Settings extends Vue {

    resources: ResourceType[] = []
    selectedResources = null;
    showNewResourceDialog = false;
    showDeleteResource = false;
    newResourceType: ResourceType;


    async created() {
        await this.loadAllResources()
    }

    async loadAllResources() {

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
        const resourceTypeService = new ResourceTypeService();
        try {
            resourceTypeService.deleteResourceType(this.selectedResources).then(r => {
                this.showDeleteResource = false;
                this.loadAllResources();
                this.$toast.add({
                    severity: 'success',
                    summary: 'Successfully deleted',
                    detail: 'Resource Type successfully deleted',
                    group: 'br',
                    life: 5000
                });
            })
        } catch (e){
            this.$toast.add({
                severity: 'error',
                summary: 'Failure',
                detail: 'An error occurred: ' + e,
                group: 'br',
                life: 5000
            });
        }
    }

    openNewResourceDialog() {
        this.showNewResourceDialog = true;
        console.log("Show New!")
    }

    onResourceSelected() {
        console.log("Selected")
        if (!this.selectedResources) {
            this.showDeleteResource = false;
        } else {
            this.showDeleteResource = true;
            }


    }

    saveNewResourceType() {
        const resourceTypeService = new ResourceTypeService()
        try {
            resourceTypeService.saveNewResourceType(this.newResourceType).then(r => {
                this.loadAllResources().then(r => {

                    this.$toast.add({
                        severity: 'success',
                        summary: 'Successfully added',
                        detail: 'New Resource Type with name ' + this.newResourceType.name + ' stored!',
                        group: 'br',
                        life: 5000
                    });

                    this.showNewResourceDialog = false;
                })
            })


        } catch (e) {
            this.$toast.add({
                severity: 'error',
                summary: 'Failure',
                detail: 'An error occurred: ' + e,
                group: 'br',
                life: 5000
            });
            console.log(e.message)
        }

    }

}