import { createApp } from "vue";
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";
import App from "./App.vue";

Stock(Highcharts);

const app = createApp(App);
app.use(HighchartsVue);
app.mount("#app");
