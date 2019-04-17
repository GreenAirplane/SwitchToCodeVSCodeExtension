import { ExtHandler } from './handler';

class TSHandler extends ExtHandler {
    constructor() {
        super('.s?css', '.html', '.vue.html');
    }
}

export default new TSHandler();
