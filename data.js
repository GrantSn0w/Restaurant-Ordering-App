export let htmlBody = `
        <div id="header">
            <div id="section-1">
                <h1 id="section-1-h1">Grant Snow's Diner</h1>
                <h4 id="section-1-h4">The best burgers and pizzas in town.</h4>
            </div>

            <main>
                    <div class= "section-2" >
                        <h1 class="emoji">🍕</h1>
                        <div>
                            <h2>Pizza</h2>
                            <p>pepperoni, mushrom, mozarella</p>
                            <p>$14</p>
                        </div>
                        <button class="button" id='button-1'>+</button>
                    </div>
                <div class="section-2">
                    <h1 class="emoji">🍔</h1>
                    <div>
                        <h2>Hamburger</h2>
                        <p>beef, cheese, lettuce</p>
                        <p>$12</p>
                    </div>
                    <button class="button" id='button-2'>+</button>
                </div>
                <div class="section-2">
                    <h1 class="emoji">🍺</h1>
                    <div>
                        <h2>Beer</h2>
                        <p>grain, hops, yeast, water</p>
                        <p>$2</p>
                    </div>
                    <button class="button" id='button-3'>+</button>
                </div>
            </main>

            <footer>
                <div id="checkout-section">
                    <h1 class="checkout-section-h1" id="checkout-section-h1">Your order</h1>
                    <div id="orders">
                        <div class="checkout-orders" id="checkout-orders-1"> </div>
                        <div class="checkout-orders" id='checkout-orders-2'> </div>
                        <div class="checkout-orders" id='checkout-orders-3'> </div>
                </div>
                <div id="total">
                    <p class="checkout-orders-text">Total price:</p>
                    <p class="cost" id="cost-total"></p>
                </div>
                <div>
                    <button id="complete-order-btn">Complete order</button>
                </div>
            </footer>
        </div>

        <div id="payment-modal">
            <h1 id="payment-text">Enter card details</h1>
            <form id='payment'>
                <input 
                type="text"
                name="fullName"
                placeholder="Enter your name"
                id= 'name-of-account'
                required/>

                <input 
                type="text"
                name="cardNumber"
                placeholder="Enter card number"
                required/>
                
                <input 
                type="text"
                name="CVV"
                placeholder="Enter CVV"
                required/>

                <button id="payment-btn">Pay</button>
                
            </form>
        </div>

        <div id="payment-complete">
            <p>Thanks <span id="customer-name"></span>! Your Order is on it's way!</p>
        </div>
            `
