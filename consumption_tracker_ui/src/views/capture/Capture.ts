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
    enableConsumptionEntry:boolean;
    valueFraction = 0;


    async created() {
        this.messages = []
        this.enableConsumptionEntry=false;
        this.resourceValueInput=0
        const rtService = new ResourceTypeService();
        this.types = await rtService.getAllResourceTypes();
        const tmpTypeList: any[] = [];
        this.types.forEach(type => {
            tmpTypeList.push({id: type.id, name: type.name, unit: " " + type.unitOfMeasure, fraction: type.fraction})
        })
        this.typeList = tmpTypeList;

    }


    updateOnSelect() {
        this.unit = this.selectedResourceType.unit;
        this.resourceValueInput=0
        this.valueFraction=this.selectedResourceType.fraction;
        this.enableConsumptionEntry=true;
        this.messages = [
            {severity: 'info', content: 'Last recorded value for '+this.selectedResourceType.name+' was 2462 kwh on 22.12.2021', id: 1}]
    }

    storeValue() {
        let tmpvalue;
        try {
        console.log("Record new Entry")



        } catch (e) {
            console.log("")
        }
    }


}
