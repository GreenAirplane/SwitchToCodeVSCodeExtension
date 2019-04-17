import { ExtHandler } from './handler';

class HTMLToCssHandler extends ExtHandler {
    constructor() {
        super('.html', '.scss', '.css');
    }
}

export default new HTMLToCssHandler();
