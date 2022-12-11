import Vue from "vue";
import Vuex from "vuex";
import { data } from "./data";

Vue.use(Vuex);

import { celciusToFahrenheit, roundFloat } from "@/utils";

enum TemperatureUnit {
  C = "C",
  F = "F",
}

enum ReadingType {
  temperature = "temperature",
  pressure = "pressure",
}

interface Reading {
  timestamp: number;
  value: number;
  type: ReadingType;
}

export default new Vuex.Store({
  state: {
    temperatureUnit: TemperatureUnit.C,
    readings: data as Array<Reading>,
  },
  getters: {
    temperature(state) {
      return state.readings.filter((r) => r.type === "temperature");
    },
    pressure(state) {
      return state.readings.filter((r) => r.type === "pressure");
    },
    currentTemperature(state, getters): number {
      return getters.temperature.at(-1).value;
    },
    currentPressure(state, getters): number {
      return getters.pressure.at(-1).value;
    },
    isPumpOn(): boolean {
      return Math.random() < 0.5; // just some dummy value
    },
    temperatureSymbol(state) {
      return state.temperatureUnit === TemperatureUnit.C ? "°C" : "°F";
    },
    convertTemperature: (state) =>
      function (value: number): number {
        return state.temperatureUnit === TemperatureUnit.F
          ? celciusToFahrenheit(value)
          : value;
      },
    formatTemperature: (state, getters) =>
      function (value: number): string {
        return (
          roundFloat(getters.convertTemperature(value)) +
          getters.temperatureSymbol
        );
      },
  },
  mutations: {
    setTemperatureUnit(state, value: TemperatureUnit) {
      state.temperatureUnit = value;
    },
  },
  actions: {},
  modules: {},
});
