//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
const mock = require('mock-fs');

import cssHandler from '../handlers/css-handler';

// Defines a Mocha test suite to group tests of similar kind together
suite('CSS Handler Tests', function() {
    test('CSS Handler Test for *.css and file.html', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.css';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.html': ''
        };
        mock(fsConfig);

        const newFile = cssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.html');

        mock.restore();
    });

    test('CSS Handler Test for *.css and file.vue.html', function() {
        const dir = 'project/app';
        const oldFile = 'default.css';

        const newFile = cssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.vue.html');
    });

    
    test('CSS Handler Test for *.scss and file.html', function() {
        const dir = 'd:/project/app';
        const oldFile = 'default.scss';

        const fsConfig: any = {};
        fsConfig[dir] = {
            'default.html': ''
        };
        mock(fsConfig);

        const newFile = cssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.html');

        mock.restore();
    });

    test('CSS Handler Test for *.scss and file.vue.html', function() {
        const dir = 'project/app';
        const oldFile = 'default.scss';

        const newFile = cssHandler.getNewUrlWithFileCheck(oldFile, dir);

        assert.equal(newFile, 'default.vue.html');
    });
});

