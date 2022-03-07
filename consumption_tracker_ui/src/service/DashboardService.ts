import axios from "axios";


export class DashboardService {

    public async getDashboardItems():Promise<[]>{
        const url = process.env.VUE_APP_BACKEND+"api/dashboard";
        const response = await axios.get(url)
        return response.data;
    }
}