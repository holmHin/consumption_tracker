import {Vue, prop} from "vue-class-component";
import {ConsuptionValueService} from "@/service/ConsuptionValueService";
import moment from "moment/moment";

export default class Details extends Vue {

    loadingDetails = false;
    showDetails = false;
    loadedConsumptions: any[] = [];
    dashboardName = "Details";
    resourceDate = {}

    basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    }

        async loadDetailsForResource(dashboard: any) {
            console.log("Load for resourceId: " + dashboard.id)
            this.loadingDetails = true;
            this.loadedConsumptions = await this.loadConsumptions(dashboard.id);
            this.loadingDetails = false;
            this.dashboardName = dashboard.name;
            this.renderChart();
            this.showDetails = true;

        }

        async loadConsumptions(resourceId: number): Promise<[]> {
            const consumptionValueService = new ConsuptionValueService();
            return consumptionValueService.getAllEntriesOfResource(resourceId);


        }

        renderChart() {
            const labelSet:string[] = [];
            const dataSet:string[] = [];

            this.loadedConsumptions.forEach(function (consumption){
                console.log(consumption)
                labelSet.push(moment(consumption.date).format("ll"));
                dataSet.push(consumption.value);
            });

            this.resourceDate = {
                labels: labelSet,
                datasets: [
                    {
                        label: 'First Dataset',
                        data: dataSet,
                        fill: false,
                        borderColor: '#42A5F5',
                        tension: .2
                    }
                ]
            };
        }







}