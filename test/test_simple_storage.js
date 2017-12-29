const SimpleStorage = artifacts.require('SimpleStorage');
// "imports" the contract to allow us to interact with it

// starts a "testing block" - where we write all tests for SimpleStorage
contract('SimpleStorage', function (accounts) {
  // in JavaScript, we choose to define our variables at the begining of their scope!
  let simpleStorage;
  let savedValue;

  // each 'it' statement should be a specific test case
  it('saves correct number on creation', async function () {
    // deploy a new SimpleStorage contract onto our local blockchain
    // 'await' word must be used before ANY interaction with the blockchain
    simpleStorage = await SimpleStorage.new(9001) // 9001 is the initalNumber in the contstructor

    // again, as we are interacting with the blockchain, we have to use the 'await' keyword
    // notice we added a '.call' - this is when we are NOT changing state and just want to get a value back
    savedValue = await simpleStorage.getNumber.call()

    // this assert statement makes sure that the value returned is the value we expect!
    // format is (value, expected_value, error_message)
    assert.equal(savedValue, 9001, 'wrong value saved on creation.')
    // if you want to read more about assert statements, check out Chai: http://chaijs.com/api/assert/
  });


  it('allows number to be updated', async function () {
    // as above, deploy a new contract
    simpleStorage = await SimpleStorage.new(9001)

    // again, as we are interacting with the contract (or blockchain), we must use 'await'
    await simpleStorage.setNumber(9002)

    // get the value that is now saved in the contract, should have updated
    savedValue = await simpleStorage.getNumber.call()

    // check that the value currently saved is correct!
    assert.equal(savedValue, 9002, 'value did not update.')
  });
});
