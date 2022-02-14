import axios, {AxiosResponse} from "axios";
import {ResourceType} from "@/models/ResourceType";
import {types} from "sass";

export class ResourceTypeService {


    public async getAllResourceTypes():Promise<ResourceType[]>{
        let rawData: any;
        const response = await axios.get("/be_mock/resource_types.json");
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



