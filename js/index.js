/* 
  using js alert,prompt and confirm and by applying algorithm, build a simple app to transfer money from one bank to another using the possible steps in atms.

  required topics:
  > variable declearations
  > strings
  > arrays
  > objects
  > functions
  > loops
  > higher array methods
  > conditionals
  > alogorithms
  > operators
*/

// logical steps

/* 
 possible steps needed to transfer money from an atm: 
 > insert your card
 > enter your pin, if incorrect display error. assume a bank as your bank
 > choose action: transfer or witdraw
 > enter receiver account number, must be exactly 10 digit else show error
 > choose receiver bank
 > display receiver info from receiver bank
 > enter amount
 > confirm amount
 > transfer if user balence is greater than the transfer amount else show error
 > transaction was successful 
 > deduct amount from sender and increase amount of receiver
 > end process
 
*/

let myCardInfo = {
  name: "Amadi Chile",
  accountNumber: "0000444455",
  balance: 100000,
  pin: 7777,
  bank: "access",
};

// available banks detabase object
let ubaUsers = [
  {
    name: "Amadi Chile",
    accountNumber: "0000111122",
    balance: 50000,
    pin: 7777,
    bank: "uba",
  },
  {
    name: "Amadi Chike",
    accountNumber: "0000111144",
    balance: 20000,
    pin: 6666,
    bank: "uba",
  },
];

let accessUsers = [
  {
    name: "Amadi Gift",
    accountNumber: "0000111133",
    balance: 10000,
    pin: 7733,
    bank: "access",
  },
  {
    name: "Amadi Chizy",
    accountNumber: "0000111199",
    balance: 12000,
    pin: 6655,
    bank: "access",
  },
];
let gtbUsers = [
  {
    name: "Amadi Ben",
    accountNumber: "0000222233",
    balance: 17000,
    pin: 7733,
    bank: "gtb",
  },
  {
    name: "Amadi David",
    accountNumber: "0000123499",
    balance: 9000,
    pin: 6655,
    bank: "gtb",
  },
];
// transfer function
function transferMoney() {
  // ensure card has been inserted
  let insertedCard = prompt("Please insert your card by typing Yes: ");
  while (String(insertedCard).toLowerCase() != "yes") {
    insertedCard = prompt("Please insert your card by typing Yes: ");
  }
  // verify sender pin
  let getPin = prompt("Please enter your pin: ");
  let correctPin = false;

  if (myCardInfo.pin == getPin) {
    correctPin = true;
  }

  // allow two more attemps if pin is incorrect else end process
  let attempts = 1;
  while (!correctPin) {
    attempts++;
    getPin = prompt(`Please correct pin. ${3 - attempts} attemps left : `);

    if (myCardInfo.pin == getPin) {
      correctPin = true;
    }
    if (attempts == 3) {
      break;
    }
  }
  if (!correctPin) {
    alert("Incorrect pin enter 3 times");
  }
  // choose transaction type
  if (correctPin) {
    let actionType = prompt(`type 1 to witdraw \ntype 2 to transfer`);

    if (actionType == 2) {
      // get receiver account number
      let receiverAccountNumber = prompt(
        "Please enter receiver account number:"
      );
      // get receiver bank
      let receiverBank = prompt(
        `Pleas select receiver bank:\n 1. uba\n 2. access\n 3. gtb`
      );
      let banks = [ubaUsers, accessUsers, gtbUsers];
      let receiverInfo;
      // verify receiver details
      let selectedBank = banks[Number(receiverBank) - 1];
      selectedBank.forEach((user) => {
        if (user.accountNumber == receiverAccountNumber) {
          receiverInfo = user;
        }
      });
      let isThisTheUser = confirm(
        `Please comfirm receiver details:
        \nName: ${receiverInfo.name}
        \nAccount Number: ${receiverInfo.accountNumber}
        \nBank: ${receiverInfo.bank}`
      );
      if (isThisTheUser) {
        let transferAmount = prompt("Please enter transfer amount: ");
        let areYouSure = confirm(
          `Are you sure?:
        \nName: ${receiverInfo.name}
        \nAccount Number: ${receiverInfo.accountNumber}
        \nBank: ${receiverInfo.bank}
        \nTransfer Amount: ${transferAmount}`
        );
        if (areYouSure) {
          if (Number(myCardInfo.balance) > Number(transferAmount)) {
            alert("Transfer successful!");
            alert(`Senders Previous account Balance: ${
              myCardInfo.balance
            }\nNew Balance: ${
              Number(myCardInfo.balance) - Number(transferAmount)
            }\n\nReceivers Previous account Balance: ${
              receiverInfo.balance
            }\nNew Balance: ${
              Number(receiverInfo.balance) + Number(transferAmount)
            }
                    `);
          } else {
            alert("Insufficient Balance");
          }
        }
      }
    } else {
      alert("service not available");
    }
  }
  console.log(myCardInfo);
}

transferMoney();
