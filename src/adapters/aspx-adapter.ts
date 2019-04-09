import { ExtAdapter } from './adapter';

class ASPXAdapter extends ExtAdapter {
    constructor() {
        super('.aspx', '.aspx.cs');
    }
}

export default new ASPXAdapter();
