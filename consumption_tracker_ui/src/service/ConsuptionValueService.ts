import {ConsumptionValue} from "@/models/ConsumptionValue";
import {ResponsePattern} from "@/models/ResponsePattern";


export class ConsuptionValueService{

    public storeNewValue(value:ConsumptionValue):ResponsePattern{

        const responsePatternNew: ResponsePattern = new class implements ResponsePattern {
            message: string;
            succsess: boolean;
        }
        throw new Error("Ooopsi, Backend is currently not available!");
        responsePatternNew.succsess = true;


        return responsePatternNew

    }

}