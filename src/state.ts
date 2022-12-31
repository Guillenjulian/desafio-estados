const state = {
  data: {
    list: [],
  },

  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log(" soy el state y e cambiado", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addItem(item: string) {
    const cs = this.getState();
    cs.list.push(item);
    this.setState(cs);
  },
  removeItem(string: string) {
    console.log("soy el string que recibo del main " + string);
    const cs = state.getState();
    // const resultado = cs.list.filter((i) => {
    //   return i !== string;
    // });

    //console.log(resultado)
    // this.setState(cs);
    cs.list.filter((i) => {
      return i !== string;
    });

    console.log(cs.list);
  },
};
export { state };
