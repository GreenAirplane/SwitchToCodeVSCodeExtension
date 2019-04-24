import { ExtHandler } from '../handler';

class MasterHandler extends ExtHandler {
    constructor() {
        super('.master', '.master.cs');
    }
}

export default new MasterHandler();
