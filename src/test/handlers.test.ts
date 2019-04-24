//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
const mock = require('mock-fs');

import htmlHandler from '../handlers/html-handler';
import tsHandler from '../handlers/ts-handler';
import vuehtmlHandler from '../handlers/vuehtml-handler';

// Defines a Mocha test suite to group tests of similar kind together
suite('Handlers Tests', function() {
    test('HTML Handler Test for *.html', function() {
        const oldFile = 'default.html';
        const newFile = htmlHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ts');
    });

    test('VueHTML Handler Test for *.vue.html', function() {
        const oldFile = 'default.vue.html';
        const newFile = vuehtmlHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ts');
    });

    test('TS Handler Test for *.ts and file.html', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.ts';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.html': ''
        };
        mock(fsConfig);

        const newFile = tsHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.html');

        mock.restore();
    });

    test('TS Handler Test for *.ts and file.vue.html', function() {
        const dir = 'project/app';
        const oldFile = 'default.ts';

        const newFile = tsHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.vue.html');
    });
});