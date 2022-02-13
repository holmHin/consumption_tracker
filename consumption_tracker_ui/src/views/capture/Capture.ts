import {Vue} from "vue-class-component";
import {ResourceValue} from "@/models/ResourceValue";
import {ResourceType} from "@/models/ResourceType";
import {ResourceTypeService} from "@/service/ResourceTypeService";


export default class Capture extends Vue {
    resourceValueInput = 0;
    selectedResourceType: any;
    types: ResourceType[];
    typeList: any[] = [];
    recordDate: Date = new Date();
    unit = "";
    messages: any[];

    async created() {
        this.messages = []
        this.selectedResourceType = new class implements ResourceType {
            id: number;
            name: string;
            unitOfMeasure = "Unit";
        }
        const rtService = new ResourceTypeService();
        this.types = await rtService.getAllResourceTypes();
        const tmpTypeList: any[] = [];
        this.types.forEach(type => {
            tmpTypeList.push({Name: type.name, Unit: " " + type.unitOfMeasure})
        })
        this.typeList = tmpTypeList;

    }


    updateOnSelect() {
        this.unit = this.selectedResourceType.Unit;
        this.messages = [
            {severity: 'info', content: 'Last recorded value for '+this.selectedResourceType.Name+' was 2462 kwh on 22.12.2021', id: 1}]
    }

    storeValue() {
        let tmpvalue;
        try {
            tmpvalue = new class implements ResourceValue {
                resourceType: ResourceType = new class implements ResourceType {
                    id = 1;
                    name = "";
                    unitOfMeasure = "";
                };
                value = 0;

            }
            tmpvalue.value = this.resourceValueInput;
        } catch (e) {
            console.log("")
        }
    }


}
