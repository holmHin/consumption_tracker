import axios, {AxiosResponse} from "axios";
import {ResourceType} from "@/models/ResourceType";
import {types} from "sass";

export class ResourceTypeService {


    public async getAllResourceTypes():Promise<ResourceType[]>{
        const url= process.env.VUE_APP_BACKEND+"api/resources";
        const response = await axios.get(url);
        const results = response.data;
        return this.mapResponseToTypeObject(results);

    }

    private mapResponseToTypeObject(results:[]):ResourceType[] {

        const type:ResourceType[] = results.map((result: any) => {
            return new class implements ResourceType {
                fraction= result.fraction;
                id= result.id;
                name = result.name;
                unitOfMeasure = result.unit;
            }
        });

        return type;

    }







}



