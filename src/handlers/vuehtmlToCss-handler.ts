import { ExtHandler } from './handler';

class VueHTMLToCssHandler extends ExtHandler {
    constructor() {
        super('.vue.html', '.scss', '.css');
    }
}

export default new VueHTMLToCssHandler();
