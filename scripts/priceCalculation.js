export const priceCalculation = (taxiFee, taxiRate, duration ) => {
    const valleyFee = 3.99
    const price = new Intl.NumberFormat('en-ca', { 
        style: 'currency', 
        currency: 'CAD' 
    }).format(
        duration * taxiRate / 100 + taxiFee + valleyFee
    )
    return price
}