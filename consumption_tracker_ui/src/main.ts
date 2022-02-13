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


const app = createApp(App);

app.use(router).use(PrimeVue);

app.component("TabMenu", TabMenu);
app.component("Dropdown", Dropdown)
app.component("InputNumber", InputNumber)
app.component('Button', Button)
app.component("Calendar", Calendar)
app.component("Card", Card)
app.component("Message", Message)

app.mount("#app");