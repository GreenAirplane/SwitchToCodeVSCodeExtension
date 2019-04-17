import * as vscode from 'vscode';
import * as path from 'path';
import aspxHandler from '../handlers/aspx-handler';
import aspxcsHandler from '../handlers/aspxcs-handler';
import htmlHandler from '../handlers/html-handler';
import tsHandler from '../handlers/ts-handler';
import vuehtmlHandler from '../handlers/vuehtml-handler';
import cssHandler from '../handlers/css-handler';

export default function switchToCode() {
    if (!vscode.window.activeTextEditor) {
        return;
    }

    const filePath = vscode.window.activeTextEditor.document.fileName;
    const dir = path.dirname(filePath);
    const fileName = path.basename(filePath);

    let newFile;
    if (
        !(newFile = aspxHandler.getNewUrl(fileName)) &&
        !(newFile = aspxcsHandler.getNewUrl(fileName)) &&
        !(newFile = vuehtmlHandler.getNewUrl(fileName)) &&
        !(newFile = htmlHandler.getNewUrl(fileName)) &&
        !(newFile = tsHandler.getNewUrlWithFileCheck(fileName, dir)) &&
        !(newFile = cssHandler.getNewUrlWithFileCheck(fileName, dir))
    ) {
        return;
    }

    newFile = `${dir}\\${newFile}`;
    const openPath = vscode.Uri.file(newFile);

    vscode.workspace.openTextDocument(openPath).then(doc => {
        vscode.window.showTextDocument(doc);
    });
}
