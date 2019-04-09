import { ExtAdapter } from './adapter';

class VueHTMLAdapter extends ExtAdapter {
    constructor() {
        super('.vue.html', '.ts');
    }
}

export default new VueHTMLAdapter();
