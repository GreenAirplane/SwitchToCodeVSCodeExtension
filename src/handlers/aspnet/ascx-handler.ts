import { ExtHandler } from '../handler';

class ASCXHandler extends ExtHandler {
    constructor() {
        super('.ascx', '.ascx.cs');
    }
}

export default new ASCXHandler();
