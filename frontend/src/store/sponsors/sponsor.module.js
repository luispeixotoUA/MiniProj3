import sponsorService from "@/api/sponsor.service";
import {
    ADD_SPONSOR,
    EDIT_SPONSOR,
    // Actions
    FETCH_SPONSORS,
    REMOVE_SPONSOR,
    SET_MESSAGE,
    // Mutations
    SET_SPONSORS
} from "./sponsor.constants";

const state = {
  sponsors: [],
  message: ""
};

const getters = {
  getSponsors: state => state.sponsors,
  getSponsorById: state => id => {
    return state.sponsors.find(sponsor => sponsor._id === id);
  },
  getMessage: state => state.message
};

const actions = {
  [FETCH_SPONSORS]: async ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      sponsorService.getSponsors(rootState.auth.token).then(
        res => {
          commit(SET_SPONSORS, res.body);
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [ADD_SPONSOR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      sponsorService.addSponsor(rootState.auth.token, payload).then(
        res => {
          commit(SET_MESSAGE, "sucesso!");
          resolve(res.body);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [EDIT_SPONSOR]: ({ rootState }, payload) => {
    return new Promise((resolve, reject) => {
      sponsorService
        .editSponsor(rootState.auth.token, payload)
        .then(res => resolve(res), err => reject(err));
    });
  },
  [REMOVE_SPONSOR]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      sponsorService.removeSponsor(rootState.auth.token, id).then(
        res => {
          commit(SET_MESSAGE, "sucesso!");
          resolve(res);
        },
        err => reject(err)
      );
    });
  }
};

export const mutations = {
  [SET_SPONSORS]: (state, sponsors) => {
    state.sponsors = sponsors;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
