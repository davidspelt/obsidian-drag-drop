"use strict";
var obsidian = require('obsidian');

class UniversalDragAndDrop extends obsidian.Plugin {
    async onload() {
        this.registerEvent(this.app.workspace.on('layout-change', () => this.setupDragAndDrop()));
        this.registerEvent(this.app.workspace.on('active-leaf-change', () => this.setupDragAndDrop()));
        this.setupDragAndDrop();
    }

    setupDragAndDrop() {
        const activeView = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!activeView) return;

        const editorEl = activeView.contentEl.querySelector('.cm-content');
        if (!editorEl || editorEl.classList.contains('sjs-enabled')) return;

        editorEl.classList.add('sjs-enabled');

        const Sortable = require('sortablejs');
        Sortable.create(editorEl, {
            animation: 150,
            draggable: '.cm-line',
            // We richten ons op het icoontje, maar de hele regel is de handle
            handle: '.cm-line', 
            delay: 150, // Iets kortere delay voor snellere reactie
            delayOnTouchOnly: true,
            touchStartThreshold: 10, // Voorkomt "bibberen" bij starten
            swapThreshold: 0.65, // Maakt het wisselen van regels makkelijker
            onEnd: async (evt) => {
                const { oldIndex, newIndex } = evt;
                if (oldIndex === newIndex || oldIndex === undefined || newIndex === undefined) return;
                
                const file = activeView.file;
                const content = await this.app.vault.read(file);
                const lines = content.split('\n');
                
                const [movedLine] = lines.splice(oldIndex, 1);
                lines.splice(newIndex, 0, movedLine);
                
                await this.app.vault.modify(file, lines.join('\n'));
            }
        });
    }
}
module.exports = UniversalDragAndDrop;
