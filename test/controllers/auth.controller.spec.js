var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', () => {
    describe('isAuthorized', () => {
        it('Should return false if not authorized', () => {
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized('admin'));
        })

        it('Should return true if authorized', () => {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        })
    })
    //async tests  pass in done  and when done call done. 
    describe('isAuthorizedAsync', () => {
        it('Should return false if not authorized', function(done){
            this.timeout(2500);//changes the functions timeout. if using functions instead of arrows functions
            //if using arrow functions you cannot use the this keyword in the same scope. 
            authController.setRoles(['user']);
            authController.isAuthorizedAsync( 'admin',  (isAuth) => {
                assert.equal(false, isAuth);
                done(); 
            });
        })
    })
});