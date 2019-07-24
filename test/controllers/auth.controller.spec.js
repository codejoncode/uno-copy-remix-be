var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', () => {
    describe('isAuthorized', () => {
        it('Should return false if not authorized', () => {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        })

        it('Should return true if authorized', () => {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        })
    })
    //async tests  pass in done  and when done call done. 
    describe('isAuthorizedAsync', () => {
        it('Should return false if not authorized', (done) => {
            authController.isAuthorizedAsync(['user'], 'admin',  (isAuth) => {
                assert.equal(false, isAuth);
                done(); 
            });
        })

        
    })

});