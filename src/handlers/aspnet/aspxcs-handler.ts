import { ExtHandler } from '../handler';

class ASPXCSHandler extends ExtHandler {
    constructor() {
        super('.aspx.cs', '.aspx');
    }
}

export default new ASPXCSHandler();
