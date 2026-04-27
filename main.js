"use strict";
var obsidian = require('obsidian');

/*! Sortable 1.15.0 - MIT | https://github.com/SortableJS/Sortable */
var Sortable = (function() {
    // Hieronder staat de volledige SortableJS bibliotheek (verkort weergegeven voor dit voorbeeld, 
    // maar gebruik de volledige versie die ik in mijn vorige bericht gaf of gebruik een 
    // versie die 'require' gebruikt zoals hieronder).
    var t=function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}
    /* ... Volledige SortableJS code hier ... */
    return require('sortablejs'); // Dit werkt als je node_modules hebt, anders de volledige JS plakken.
})();

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

        // We gebruiken de require variant omdat je die in je bundler had
        const SortableJS = require('sortablejs');
        
        SortableJS.create(editorEl, {
            animation: 150,
            draggable: '.cm-line',
            delay: 150,
            delayOnTouchOnly: true,
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
