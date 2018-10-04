'use strict';

/**
 * Lemmet extension
 */
const vscode = require('vscode');
const lemmet = require('./lemmet.ext.js');

function activate(context) {

    console.log('Congratulations, your extension "lemmet" is now active!');

    let disposable = vscode.commands.registerCommand('extension.Lemmet', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);

        let lemmet_text = lemmet.lemmet2emmet(text);

        editor.edit(builder => {
            builder.replace(selection, lemmet_text);
        });
    
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;