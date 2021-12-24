import * as vscode from 'vscode';
import * as path from 'path';
import htmlToCssHandler from '../handlers/htmlToCss-handler';
import vueHTMLToCssHandler from '../handlers/vuehtmlToCss-handler';
import tsToCssHandler from '../handlers/tsToCss-handler';

export default function switchToCss() {
    if (!vscode.window.activeTextEditor) {
        return;
    }

    const filePath = vscode.window.activeTextEditor.document.fileName;
    const dir = path.dirname(filePath);
    const fileName = path.basename(filePath);

    let newFile;
    if (
        !(newFile = vueHTMLToCssHandler.getNewUrlWithFileCheck(
            fileName,
            dir
        )) &&
        !(newFile = htmlToCssHandler.getNewUrlWithFileCheck(fileName, dir)) &&
        !(newFile = tsToCssHandler.getNewUrlWithFileCheck(fileName, dir))
    ) {
        return;
    }

    newFile = path.join(dir, newFile);
    const openPath = vscode.Uri.file(newFile);

    vscode.workspace.openTextDocument(openPath).then((doc) => {
        vscode.window.showTextDocument(doc);
    });
}
