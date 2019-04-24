//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import aspxHandler from '../handlers/aspnet/aspx-handler';
import aspxcsHandler from '../handlers/aspnet/aspxcs-handler';
import ascxHandler from '../handlers/aspnet/ascx-handler';
import ascxcsHandler from '../handlers/aspnet/ascxcs-handler';
import masterHandler from '../handlers/aspnet/master-handler';
import mastercsHandler from '../handlers/aspnet/mastercs-handler';

// Defines a Mocha test suite to group tests of similar kind together
suite('ASP.Net Handlers Tests', function() {
    test('ASPX Handler Test for *.aspx', function() {
        const oldFile = 'default.aspx';
        const newFile = aspxHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.aspx.cs');
    });

    test('ASPXCS Handler Test for *.aspx.cs', function() {
        const oldFile = 'default.aspx.cs';
        const newFile = aspxcsHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.aspx');
    });

    test('ASPXCS Handler Test for *.aspx', function() {
        const oldFile = 'default.aspx';
        const newFile = aspxcsHandler.getNewUrl(oldFile);

        assert.equal(newFile, null);
    });

    test('ASCX Handler Test for *.ascx', function() {
        const oldFile = 'default.ascx';
        const newFile = ascxHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ascx.cs');
    });

    test('ASCXCS Handler Test for *.ascx.cs', function() {
        const oldFile = 'default.ascx.cs';
        const newFile = ascxcsHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.ascx');
    });

    test('ASCXCS Handler Test for *.ascx', function() {
        const oldFile = 'default.ascx';
        const newFile = ascxcsHandler.getNewUrl(oldFile);

        assert.equal(newFile, null);
    });

    test('Master Handler Test for *.master', function() {
        const oldFile = 'default.master';
        const newFile = masterHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.master.cs');
    });

    test('MasterCS Handler Test for *.master.cs', function() {
        const oldFile = 'default.master.cs';
        const newFile = mastercsHandler.getNewUrl(oldFile);

        assert.equal(newFile, 'default.master');
    });

    test('MasterCS Handler Test for *.master', function() {
        const oldFile = 'default.master';
        const newFile = mastercsHandler.getNewUrl(oldFile);

        assert.equal(newFile, null);
    });
});