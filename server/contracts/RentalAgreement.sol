// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RentalAgreement {
    address public landlord;
    address public tenant;
    uint256 public rentAmount;
    uint256 public securityDeposit;
    uint256 public dueDate;
    bool public isSigned;
    bool public isActive;

    event AgreementSigned(address indexed landlord, address indexed tenant);
    event RentPaid(address indexed tenant, uint256 amount);
    event ContractTerminated(address indexed landlord, address indexed tenant);

    modifier onlyLandlord() {
        require(msg.sender == landlord, "Only the landlord can perform this action");
        _;
    }

    modifier onlyTenant() {
        require(msg.sender == tenant, "Only the tenant can perform this action");
        _;
    }

    modifier agreementActive() {
        require(isActive, "Agreement is not active");
        _;
    }

    constructor(uint256 _rentAmount, uint256 _securityDeposit, uint256 _dueDate) {
        landlord = msg.sender;
        rentAmount = _rentAmount;
        securityDeposit = _securityDeposit;
        dueDate = _dueDate;
    }

    function signAgreement(address _tenant) external onlyLandlord {
        require(!isSigned, "Agreement already signed");
        tenant = _tenant;
        isSigned = true;
        isActive = true;
        emit AgreementSigned(landlord, tenant);
    }

    function payRent() external payable onlyTenant agreementActive {
        require(msg.value == rentAmount, "Incorrect rent amount");
        require(block.timestamp <= dueDate, "Rent is overdue");
        payable(landlord).transfer(msg.value);
        emit RentPaid(tenant, msg.value);
    }

    function terminateContract() external onlyLandlord agreementActive {
        isActive = false;
        emit ContractTerminated(landlord, tenant);
    }

    function refundDeposit() external onlyLandlord {
        require(!isActive, "Contract is still active");
        payable(tenant).transfer(securityDeposit);
    }
}
