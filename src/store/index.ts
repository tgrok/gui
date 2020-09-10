import Vue from 'vue'
import Vuex from 'vuex'
import {find, cloneDeep, findIndex} from "lodash";
import Drmer from "@/Drmer";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 0,
    server: {
      host: '', // ngrok server host
      port: '', // ngrok server port
    },
    tunnels: [],
    deletingId: '',
  },
  mutations: {
    setStatus: function (state, payload) {
      state.status = payload;
    },
    setDeletingId: function (state, payload) {
      state.deletingId = payload
    },
    tunnelOpened: function (state, payload) {
      const tunnel: any = find(state.tunnels, {
        id: payload.id,
      });
      if (!tunnel) {
        return;
      }
      tunnel.status = 10;
    },
    tunnelClosed: function (state, payload) {
      const tunnel: any = find(state.tunnels, {
        id: payload,
      });
      if (!tunnel) {
        return;
      }
      tunnel.status = 0;
    },
    setTunnelStatus: function (state, payload) {
      const tunnel: any = find(state.tunnels, {
        id: payload.id,
      });
      if (!tunnel) {
        return;
      }
      tunnel.status = payload.status;
      tunnel.url = payload.url;
    }
  },
  actions: {
    load: async function ({state}) {
      const config: any = await Drmer.callJson('ConfigService@load');
      state.server = config.server;
      const tunnels = config.tunnels;
      tunnels.forEach((tunnel: any) => {
        tunnel.status = 0;
      })
      state.tunnels = tunnels;
    },
    saveTunnels: function ({state}) {
      const tunnels = cloneDeep(state.tunnels);
      tunnels.forEach((tunnel: any) => {
        delete tunnel.status;
      })
      Drmer.call('ConfigService@set', {
        key: "tunnels",
        value: tunnels,
      })
    },
    editTunnel: function ({state}, tunnel: any) {
      const tunnels: any[] = state.tunnels;
      const index = findIndex(tunnels, {
        id: tunnel.id,
      });
      if (index < 0) {
        tunnels.push(tunnel)
      } else {
        tunnels.splice(index, 1, tunnel);
      }
      this.dispatch("saveTunnels");
    },
    deleteTunnel: function ({state}, id) {
      const tunnels: any[] = state.tunnels;
      const index = findIndex(tunnels, {
        id
      })
      tunnels.splice(index, 1);
      Drmer.call("TgrokService@remove", {
        id
      });
      this.dispatch("saveTunnels");
    },
    openTunnel: async function ({state}, payload) {
      const tunnel: any = find(state.tunnels, {
        id: payload,
      });
      if (!tunnel) {
        return;
      }
      tunnel.paused = false;
      tunnel.status = 6;
      Drmer.call("TgrokService@open", {
        id: payload,
      });
      this.dispatch("saveTunnels");
    },
    closeTunnel: async function ({state}, payload) {
      const tunnel: any = find(state.tunnels, {
        id: payload,
      });
      if (!tunnel) {
        return;
      }
      tunnel.paused = true;
      tunnel.status = 4;
      Drmer.call("TgrokService@close", {
        id: payload,
      });
      this.dispatch("saveTunnels");
    },
    editServer: function ({state}, payload) {
      state.server = payload
      Drmer.call("ConfigService@set", {
        key: "server",
        value: payload,
      });
    }
  },
  modules: {}
})
