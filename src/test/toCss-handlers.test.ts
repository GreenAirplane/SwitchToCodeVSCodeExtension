//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
const mock = require('mock-fs');

import htmlToCssHandler from '../handlers/htmlToCss-handler';
import vueHTMLToCssHandler from '../handlers/vuehtmlToCss-handler';
import tsToCssHandler from '../handlers/tsToCss-handler';

// Defines a Mocha test suite to group tests of similar kind together
suite('* to CSS/SCSS Handlers Tests', function() {
    test('HTML to CSS Handler Test for *.html and file.css', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.html';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.scss': ''
        };
        mock(fsConfig);

        const newFile = htmlToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.scss');

        mock.restore();
    });

    test('HTML to CSS Handler Test for *.html and file.scss', function() {
        const dir = 'project/app';
        const oldFile = 'default.html';

        const newFile = htmlToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.css');
    });

    test('VueHTML to CSS Handler Test for *.vue.html and file.css', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.vue.html';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.scss': ''
        };
        mock(fsConfig);

        const newFile = vueHTMLToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.scss');

        mock.restore();
    });

    test('VueHTML to CSS Handler Test for *.vue.html and file.scss', function() {
        const dir = 'project/app';
        const oldFile = 'default.vue.html';

        const newFile = vueHTMLToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.css');
    });

    test('TS to CSS Handler Test for *.ts and file.css', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.ts';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.scss': ''
        };
        mock(fsConfig);

        const newFile = tsToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.scss');

        mock.restore();
    });

    test('TS to CSS Handler Test for *.ts and file.scss', function() {
        const dir = 'project/app';
        const oldFile = 'default.ts';

        const newFile = tsToCssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.css');
    });
});

