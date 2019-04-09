import { ExtAdapter } from './adapter';

class ASPXCSAdapter extends ExtAdapter {
    constructor() {
        super('.aspx.cs', '.aspx');
    }
}

export default new ASPXCSAdapter();
