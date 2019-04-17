import { ExtHandler } from './handler';

class HTMLHandler extends ExtHandler {
    constructor() {
        super('.html', '.ts');
    }
}

export default new HTMLHandler();
