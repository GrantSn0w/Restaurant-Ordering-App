import { htmlBody } from './data.js'
function displayHTML(){
    document.getElementById('html-body').innerHTML = htmlBody     
}
displayHTML()
let costTotal = 0
document.getElementById('button-1').addEventListener('click', function(){
    document.getElementById('checkout-section').style.display = 'block'
    document.getElementById('checkout-section-h1').style.display = 'block'
    document.getElementById('payment-complete').style.display = 'none'
    document.getElementById('checkout-orders-1').innerHTML =`
    <p class="checkout-orders-text">Pizza</p>
                        <button class="remove-btn" id='remove-btn-1'>remove</button>
                        <p class="cost">$14</p>
    `
    costTotal = costTotal + 14
    document.getElementById('cost-total').innerText = `$ ${costTotal}`
})

document.getElementById('button-2').addEventListener('click', function(){
    document.getElementById('checkout-section').style.display = 'block'
    document.getElementById('checkout-section-h1').style.display = 'block'
    document.getElementById('payment-complete').style.display = 'none'
    document.getElementById('checkout-orders-2').innerHTML =`
    <p class="checkout-orders-text">Hamburger</p>
                            <button class="remove-btn" id="remove-btn-2">remove</button>
                            <p class="cost">$12</p>
                            `
    costTotal = costTotal + 12
    document.getElementById('cost-total').innerText = `$ ${costTotal}`
})

document.getElementById('button-3').addEventListener('click', function(){
    document.getElementById('checkout-section').style.display = 'block'
    document.getElementById('checkout-section-h1').style.display = 'block'
    document.getElementById('payment-complete').style.display = 'none'
    document.getElementById('checkout-orders-3').innerHTML =`
    <p class="checkout-orders-text">Beer</p>
    <button class="remove-btn" id='remove-btn-3'>remove</button>
    <p class="cost">$12</p>
    `
    costTotal = costTotal + 12
    document.getElementById('cost-total').innerText = `$ ${costTotal}`
})

document.getElementById('complete-order-btn').addEventListener('click', function(){
    document.getElementById('payment-modal').style.display = 'block'
})

document.getElementById('payment-btn').addEventListener('click', function(){
    document.getElementById('customer-name').innerText = document.getElementById('name-of-account').textContent
    document.getElementById('payment-complete').style.display = 'inline'
    document.getElementById('checkout-section').style.display = 'none'
    document.getElementById('payment-modal').style.display = 'none'
    document.getElementById('checkout-orders-1').innerHTML=``
    document.getElementById('checkout-orders-2').innerHTML=``
    document.getElementById('checkout-orders-3').innerHTML=``
    costTotal = 0
    document.getElementById('cost-total').innerText = `$ ${costTotal}`
})

document.getElementById('remove-btn-2').addEventListener('click', function(){
    document.getElementById('checkout-orders-2').innerText =``
    
    document.getElementById('cost-total').innerText += `+ $14`
})

