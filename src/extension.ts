// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import aspxHandler from './handlers/aspx-handler';
import aspxcsHandler from './handlers/aspxcs-handler';
import htmlHandler from './handlers/html-handler';
import tsHandler from './handlers/ts-handler';
import vuehtmlHandler from './handlers/vuehtml-handler';
import cssHandler from './handlers/css-handler';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand(
        'extension.switchToCode',
        () => {
            // The code you place here will be executed every time your command is executed

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
    );

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
