import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";
import TabMenu from "primevue/tabmenu";
import Dropdown from 'primevue/dropdown';
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Message from 'primevue/message';
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';
import ProgressBar from 'primevue/progressbar';



const app = createApp(App);

app.use(router).use(PrimeVue);
app.use(ToastService);


app.component("TabMenu", TabMenu);
app.component("Dropdown", Dropdown);
app.component("InputNumber", InputNumber);
app.component('Button', Button);
app.component("Calendar", Calendar);
app.component("Card", Card);
app.component("Message", Message);
app.component("Toast", Toast);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("InputSwitch", InputSwitch);
app.component("ProgressBar", ProgressBar);


app.mount("#app");