import {Vue} from "vue-class-component";
import {ConsumptionValue} from "@/models/ConsumptionValue";
import {ResourceType} from "@/models/ResourceType";
import {ResourceTypeService} from "@/service/ResourceTypeService";
import {ConsuptionValueService} from "@/service/ConsuptionValueService";


export default class Capture extends Vue {
    selectedResourceType: any;
    types: ResourceType[];
    typeList: any[] = [];
    unit = "";
    messages: any[];
    enableConsumptionEntry: boolean;
    valueFraction = 0;
    consumptionValue: ConsumptionValue;


    async created() {
        this.consumptionValue = new class implements ConsumptionValue {
            date = new Date();
            resourceType: ResourceType;
            value = 0;
        }
        this.messages = []
        this.enableConsumptionEntry = false;
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
        this.consumptionValue.value = 0
        this.valueFraction = this.selectedResourceType.fraction;
        this.enableConsumptionEntry = true;
        this.consumptionValue.resourceType = this.selectedResourceType.obj;
        this.messages = [
            {
                severity: 'info',
                content: 'Last recorded value for ' + this.selectedResourceType.name + ' was 2462 kwh on 22.12.2021',
                id: 1
            }]
    }

    storeValue() {

        try {

            const cvService = new ConsuptionValueService().storeNewValue(this.consumptionValue);
            if (cvService.succsess) {
                this.$toast.add({
                    severity: 'success',
                    summary: 'Successfully added',
                    detail: 'New record for ' + this.selectedResourceType.name + ' stored!',
                    group: 'br',
                    life: 3000
                });
            }
        } catch (e) {
            this.$toast.add({
                severity: 'error',
                summary: 'Failure',
                detail: 'An error occurred: '+e,
                group: 'br',
                life: 3000
            });
        }

    }


}
