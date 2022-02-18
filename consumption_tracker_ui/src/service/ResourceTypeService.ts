import axios, {AxiosResponse} from "axios";
import {ResourceType} from "@/models/ResourceType";
import {types} from "sass";

export class ResourceTypeService {


    public async getAllResourceTypes():Promise<ResourceType[]>{
        const url= process.env.VUE_APP_BACKEND+"resources";
        console.log(url);
        const response = await axios.get(url);
        const results = response.data;
        console.log(results)
        return this.mapResponseToTypeObject(results);

    }

    private mapResponseToTypeObject(results:[]):ResourceType[] {

        const type:ResourceType[] = results.map((result: any) => {
            return new class implements ResourceType {
                fraction= result.fraction;
                id= result.id;
                name = result.Type;
                unitOfMeasure = result.Unit;
            }
        });

        return type;

    }







}



