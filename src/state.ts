export const state = {
  data: {
    idConter: 0,
    list: [],
  },

  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState: ["data"]) {
    this.data = newState;
    this.listeners.forEach((listener) => listener());
  },
  subscribe(callback: (state: ["data"]) => void) {
    this.listeners.push(callback);
  },
  addItem(item: any) {
    this.data.list.push(item);
    console.log(item);
  },
};

const lastState = state;
//console.log(lastState, "lastState");
