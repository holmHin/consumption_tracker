import {ConsumptionValue} from "@/models/ConsumptionValue";
import {ResponsePattern} from "@/models/ResponsePattern";
import axios from "axios";


export class ConsuptionValueService{

    public async storeNewValue(value:ConsumptionValue):Promise<ResponsePattern>{

        const url= process.env.VUE_APP_BACKEND+"api/consumptions";
        const response = await axios.post(url, value);
        const responsePatternNew: ResponsePattern = new class implements ResponsePattern {
            message: string;
            succsess: boolean;
        }
        if(response.data.id > 0 && response.data.value == value.value){
            responsePatternNew.succsess = true;
            responsePatternNew.message  = "Successfully stored new Value"
        }
        return responsePatternNew

    }

    public async getAllEntriesOfResource(resourceId:number):Promise<[]>{
        const url= process.env.VUE_APP_BACKEND+"api/consumptions/byResource/"+resourceId;
        const response = await axios.get(url);
        return response.data;
    }

}