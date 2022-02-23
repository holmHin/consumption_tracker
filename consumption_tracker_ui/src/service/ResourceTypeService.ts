import axios, {AxiosResponse} from "axios";
import {ResourceType} from "@/models/ResourceType";
import {types} from "sass";
import {ResponsePattern} from "@/models/ResponsePattern";

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
                incremental= result.incremental;
                fraction= result.fraction;
                id= result.id;
                name = result.name;
                unit = result.unit;
            }
        });

        return type;

    }

    public async saveNewResourceType(resourceType:ResourceType):Promise<ResponsePattern>{
        const url= process.env.VUE_APP_BACKEND+"api/resources";
        const response = await axios.post(url, resourceType);
        const responsePattern: ResponsePattern = new class implements ResponsePattern {
            message: string;
            succsess= false;
        }
        if(response.data.id > 0 && response.data.name == resourceType.name){
            responsePattern.succsess = true;
            responsePattern.message ="Successfully stored new Resource"
        }

        return responsePattern;
    }

    public async deleteResourceType(resource:any){
        const url= process.env.VUE_APP_BACKEND+"api/resources/delete";
        const response = await axios.post(url, resource);
        const data = response.data;
    }







}



