import {ResourceType} from "@/models/ResourceType";

export interface ConsumptionValue {

    value: number;
    resourceType: ResourceType;
    date: Date;

}