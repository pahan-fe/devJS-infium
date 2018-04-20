import {getInvoices, addInvoice, removeInvoice, editInvoice} from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case getInvoices: return action.payload;
    case editInvoice: return Object.assign({}, state, {[action.payload.id]: action.payload});
    case addInvoice: return Object.assign({}, state, {[action.payload.id]: action.payload});
    case removeInvoice: {
      const newstate = Object.assign({}, state);
      delete newstate[action.payload];
      return newstate;
    }
    default:
      return state;
  }
};