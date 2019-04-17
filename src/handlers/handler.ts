export class ExtHandler {
    protected regExp: RegExp;
    protected newExt: string;

    constructor(oldExt: string, newExt: string) {
        this.newExt = newExt;

        this.regExp = new RegExp(`${oldExt}$`);
    }

    public getNewUrl(oldFile: string): string | null {
        if (this.regExp.test(oldFile)) {
            return oldFile.replace(this.regExp, this.newExt);
        } else {
            return null;
        }
    }
}
