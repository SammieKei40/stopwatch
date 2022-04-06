import {createWebHistory, createRouter} from "vue-router";

import Stopwatch from '../components/Stopwatch.vue';
import Alarm from "../components/Alarm.vue"
import Timer from "../components/Timer.vue"
import Clock from "../components/Clock.vue"
import Timersetup from "../components/Timersetup.vue"

const routes = [
    {
        path: "/",
        name: "Stopwatch",
        component: Stopwatch,
    },
    {
        path: "/Alarm",
        name: "Alarm",
        component: Alarm,
    },
    {
        path: "/Timer",
        name: "Timer",
        component: Timer,
    },
    {
        path: "/Clock",
        name: "Clock",
        component: Clock,
    },
    {
        path: "/Timersetup",
        name: "Timersetup",
        component: Timersetup,
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router