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
            //this.timeout(2500);//changes the functions timeout. if using functions instead of arrows functions
            //if using arrow functions you cannot use the this keyword in the same scope. 
            authController.isAuthorizedAsync(['user'], 'admin',  (isAuth) => {
                assert.equal(false, isAuth);
                done(); 
            });
        })
    })

});