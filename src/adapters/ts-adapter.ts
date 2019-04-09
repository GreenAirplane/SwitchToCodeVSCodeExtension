import { ExtAdapter } from './adapter';
import * as fs from 'fs';

class TSAdapter extends ExtAdapter {
    constructor() {
        super('.ts', '.html');
    }

    public getNewUrlWithFileCheck(oldFile: string, dir: string): string | null {
        let newFile = super.getNewUrl(oldFile);
        if (!newFile) {
            return null;
        }

        const path = `${dir}\\${newFile}`;
        if (fs.existsSync(path)) {
            return newFile;
        } else {
            return oldFile.replace(this.regExp, '.vue.html');
        }
    }
}

export default new TSAdapter();
