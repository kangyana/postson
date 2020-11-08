import { Module as ModuleType } from 'vuex';

export const NAMESPACED = 'HOME';

interface ModelState {}

const Model: ModuleType<ModelState, any> = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
};

export default Model;
