import { ExtHandler } from './handler';
import * as fs from 'fs';

class TSHandler extends ExtHandler {
    constructor() {
        super('\.s?css', '.html');
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

export default new TSHandler();
