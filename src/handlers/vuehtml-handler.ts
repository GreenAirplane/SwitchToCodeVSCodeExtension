import { ExtHandler } from './handler';

class VueHTMLHandler extends ExtHandler {
    constructor() {
        super('.vue.html', '.ts');
    }
}

export default new VueHTMLHandler();
