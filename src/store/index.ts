import { observable, action } from 'mobx';

export default class AppState {
  @observable authenticated: string;
  @observable authenticating: boolean;
  @observable items: any;
  @observable item: any;

  constructor() {
    this.authenticated = 'hello';
    this.authenticating = false;
    this.items = [];
    this.item = {};
  }

  @action setData(data: any) {
    this.items = data;
    this.authenticated = 'good'
  }

  @action setSingle(data: any) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }
}