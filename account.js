const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  
  class Account {
    #balance;
    constructor(name, balance) {
      this.id = uid();
      this.name = name;
      this.#balance = balance;
    }
  
    get balance() {
      return this.#balance;
    }
  
    set balance(newBalance) {
      this.#balance = newBalance;
    }
  
    credit(increaseAmount) {
      this.#balance += increaseAmount;
    }
  
    debit(debitAmount) {
      this.#balance -= debitAmount;
    }
  
    transferTo(target, amount) {
      target.credit(amount);
      this.debit(amount);
    }
  
    static identifyAccounts(...args) {
      return args.map((el) => el.id);
    }
  }
  
  const saving = new Account("saving", 1000);
  const current = new Account("current", 8000);
  
  saving.credit(5000);
  console.log(saving.balance);
  saving.debit(1000);
  console.log(saving.balance);
  saving.debit(2000);
  console.log(saving.balance);
  
  saving.transferTo(current, 1000);
  console.log(saving.balance);
  
  console.log(Account.identifyAccounts(saving, current));