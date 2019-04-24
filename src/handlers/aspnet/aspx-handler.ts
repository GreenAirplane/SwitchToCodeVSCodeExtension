import { ExtHandler } from '../handler';

class ASPXHandler extends ExtHandler {
    constructor() {
        super('.aspx', '.aspx.cs');
    }
}

export default new ASPXHandler();
