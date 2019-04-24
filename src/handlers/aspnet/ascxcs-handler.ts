import { ExtHandler } from '../handler';

class ASCXCSHandler extends ExtHandler {
    constructor() {
        super('.ascx.cs', '.ascx');
    }
}

export default new ASCXCSHandler();
