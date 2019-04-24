import { ExtHandler } from '../handler';

class MasterCSHandler extends ExtHandler {
    constructor() {
        super('.master.cs', '.master');
    }
}

export default new MasterCSHandler();
