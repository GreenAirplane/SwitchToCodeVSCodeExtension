//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
const mock = require('mock-fs');

import aspxAdapter from '../adapters/aspx-adapter';
import aspxcsAdapter from '../adapters/aspxcs-adapter';
import htmlAdapter from '../adapters/html-adapter';
import tsAdapter from '../adapters/ts-adapter';
import vuehtmlAdapter from '../adapters/vuehtml-adapter';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function() {
    test('ASPX Adapter Test for *.aspx', function() {
        const oldFile = 'default.aspx';
        const newFile = aspxAdapter.getNewUrl(oldFile);

        assert.equal(newFile, 'default.aspx.cs');
    });

    test('ASPXCS Adapter Test for *.aspx.cs', function() {
        const oldFile = 'default.aspx.cs';
        const newFile = aspxcsAdapter.getNewUrl(oldFile);

        assert.equal(newFile, 'default.aspx');
    });

    test('ASPXCS Adapter Test for *.aspx', function() {
        const oldFile = 'default.aspx';
        const newFile = aspxcsAdapter.getNewUrl(oldFile);

        assert.equal(newFile, null);
    });

    test('HTML Adapter Test for *.html', function() {
        const oldFile = 'default.html';
        const newFile = htmlAdapter.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ts');
    });

    test('VueHTML Adapter Test for *.vue.html', function() {
        const oldFile = 'default.vue.html';
        const newFile = vuehtmlAdapter.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ts');
    });

    test('TS Adapter Test for *.ts and file.html', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.ts';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.html': ''
        };
        mock(fsConfig);

        const newFile = tsAdapter.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.html');

        mock.restore();
    });

    test('TS Adapter Test for *.ts and file.vue.html', function() {
        const dir = 'project/app';
        const oldFile = 'default.ts';

        const newFile = tsAdapter.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.vue.html');
    });
});
