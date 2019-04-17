import { ExtHandler } from './handler';

class TSHandler extends ExtHandler {
    constructor() {
        super('.ts', '.html', '.vue.html');
    }
}

export default new TSHandler();
