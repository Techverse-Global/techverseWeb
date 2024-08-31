const investAmountInput = document.querySelector('#invest-amount')
const investResult = document.querySelector('#invest-result')
const investCurrency = document.querySelector('#invest-currency')

investAmountInput.addEventListener('input', () => {
    main()
})

investCurrency.addEventListener('change', () => {
    main()
})


function calculateNairaInterest(amount) {
    amount = (5 / 100) * amount
    return amount
}

function calculateCfaInterest(amount) {
    amount = (5 / 100) * amount
    return amount
}

function updateInvestRessult(interest, currency) {

    (currency == 'naira') 
    ?
        investResult.textContent = `₦${interest}`
    :
        investResult.textContent = `CFA${interest}`

}

function formatAmount(amount) {
    return amount.toLocaleString()
}

function main() {
    let calculatedInterest;
    let investAmount = Number(investAmountInput.value)


    calculatedInterest = (investCurrency.value == 'naira') 
    ?
        calculateNairaInterest(investAmount)
    :
        calculateCfaInterest(investAmount)
    
    const calculatedInterestFormatted = formatAmount(calculatedInterest)

    updateInvestRessult(calculatedInterestFormatted, investCurrency.value)
}