import TestStore from './test-store';

export default class RootStore {
    public test_store: TestStore;

    constructor() {
        this.test_store = new TestStore();
    }
}
