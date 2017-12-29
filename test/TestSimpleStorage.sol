pragma solidity ^0.4.17;

// truffle gives us some helpful testing libraries by default
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
// We also have to import the contract that we are testing
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

  // each function is a single test case
  function testSavesCorrectNumberOnCreation() public {
    // deploying a new contract
    SimpleStorage simpleStorage = new SimpleStorage(9001);

    // call the getNumber function on the simpleStorage contract
    uint savedValue = simpleStorage.getNumber();

    // check that the returned number is the correct number
    Assert.equal(savedValue, 9001, "wrong value saved on creation.");
  }


  function testAllowsNumberToBeUpdated() public {
    // again, deploy a new contract
    SimpleStorage simpleStorage = new SimpleStorage(9001);

    // change the number saved by the contract
    simpleStorage.setNumber(9002);

    // now, get the current saved number (which should have updated)
    uint savedValue = simpleStorage.getNumber();

    // make sure it saved
    Assert.equal(savedValue, 9002, "value did not update.");
  }

}
