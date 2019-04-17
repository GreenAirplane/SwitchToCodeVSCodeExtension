import * as fs from 'fs';

export class ExtHandler {
    protected regExp: RegExp;
    protected newExt: string;
    protected fallbackExt: string | null;

    constructor(
        oldExt: string,
        newExt: string,
        fallbackExt: string | null = null
    ) {
        this.newExt = newExt;
        this.fallbackExt = fallbackExt;

        this.regExp = new RegExp(`${oldExt}$`);
    }

    public getNewUrl(oldFile: string): string | null {
        if (this.regExp.test(oldFile)) {
            return oldFile.replace(this.regExp, this.newExt);
        } else {
            return null;
        }
    }

    public getNewUrlWithFileCheck(oldFile: string, dir: string): string | null {
        let newFile = this.getNewUrl(oldFile);
        if (!newFile || !this.fallbackExt) {
            return null;
        }

        const path = `${dir}\\${newFile}`;
        if (fs.existsSync(path)) {
            return newFile;
        } else {
            return oldFile.replace(this.regExp, this.fallbackExt);
        }
    }
}
