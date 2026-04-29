"use strict";

var obsidian = require('obsidian');

class UniversalDragAndDrop extends obsidian.Plugin {
    async onload() {
        console.log('Line Drag and Drop geladen');
        
        this.registerEvent(this.app.workspace.on('layout-change', () => this.setupDragAndDrop()));
        this.registerEvent(this.app.workspace.on('active-leaf-change', () => this.setupDragAndDrop()));
        
        // Wacht even tot de editor volledig is opgebouwd
        this.timeout = window.setTimeout(() => this.setupDragAndDrop(), 1000);
    }

    onunload() {
        if (this.timeout) window.clearTimeout(this.timeout);
    }

    setupDragAndDrop() {
        const activeView = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!activeView) return;

        const editorEl = activeView.contentEl.querySelector('.cm-content');
        if (!editorEl || editorEl.classList.contains('sjs-enabled')) return;

        editorEl.classList.add('sjs-enabled');

        // Gebruik de Sortable library die vaak al in de Obsidian context aanwezig is
        const Sortable = require('sortablejs');

        Sortable.create(editorEl, {
            animation: 150,
            draggable: '.cm-line',
            handle: '.cm-line', 
            delay: 200, 
            delayOnTouchOnly: true,
            touchStartThreshold: 5,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
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
