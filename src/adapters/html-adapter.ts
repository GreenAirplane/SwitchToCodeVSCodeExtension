import { ExtAdapter } from './adapter';

class HTMLAdapter extends ExtAdapter {
    constructor() {
        super('.html', '.ts');
    }
}

export default new HTMLAdapter();
