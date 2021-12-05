function UserCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];

    return {
        getCardOptions: function () {
            return {
                balance,
                transactionLimit,
                historyLogs,
                key,
            }
        },

        putCredits: function (amount) {
            balance += amount;
            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toString()
            })
            return balance;
        },

        takeCredits: function (amount) {
            if (amount <= transactionLimit && amount <= balance) {
                balance -= amount;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime: new Date().toString()
                })
                return balance;
            }
            console.error('Go make some money first!');
        },

        setTransactionLimit: function (limit) {
            transactionLimit = limit;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: new Date().toString()
            })
            return transactionLimit;
        },

        transferCredits: function (amount, card) {
            let totalAmount = amount * 1.05;
            if (totalAmount <= transactionLimit && totalAmount <= balance) {
                balance -= totalAmount;
                card.putCredits(amount);
                return balance;
            }
            console.error('Go make some money first!');
        },
    }
}

// let card3 = new UserCard(3);
// card3.putCredits(300);
// card3.setTransactionLimit(1000);

function UserAccount(name) {
    let cards = [];

    return {
        addCard: function () {
            if (cards.length < 3) {
                cards.push(new UserCard(cards.length + 1));
            }
            return cards;
        },

        getCardByKey: function (key) {
            return cards[key].getCardOptions();
        },
    }
}