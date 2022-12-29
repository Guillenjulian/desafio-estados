export const state = {
  data: {
    idConter: 0,
    list: [],
  },

  listeners: [],
  getState() {
    return this.data;
  },
  setState(NewState) {
    this.data = NewState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  suscribe(cd: (any) => any) {
    this.listeners.push(cd);
  },
  addItem(item: string) {
    const cd = state.getState();
    cd.list.push(item);
    this.setState(cd);
    console.log(cd);
  },
};
const lastState = state.setState("");
//console.log(lastState, "lastState");
