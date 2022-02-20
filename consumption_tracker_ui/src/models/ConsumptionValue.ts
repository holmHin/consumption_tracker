import {ResourceType} from "@/models/ResourceType";

export interface ConsumptionValue {

    value: number;
    resourceId: number;
    unit: string;
    date: Date;


}