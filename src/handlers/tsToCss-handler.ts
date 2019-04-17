import { ExtHandler } from './handler';

class TSToCssHandler extends ExtHandler {
    constructor() {
        super('.ts', '.scss', '.css');
    }
}

export default new TSToCssHandler();
