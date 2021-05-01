import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.use(Toast, { timeout: 3000, icon: false, closeButton: false });
