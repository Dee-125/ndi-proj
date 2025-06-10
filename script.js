let order = [];
    let total = 0;

    function addToOrder(price, item) {
      order.push({ item, price });
      total += price;
      updateOrderList();
    }

    function updateOrderList() {
      let orderList = document.getElementById("order-list");
      orderList.innerHTML = "";
      order.forEach(orderItem => {
        let li = document.createElement("li");
        li.textContent = `${orderItem.item} - $${orderItem.price}`;
        orderList.appendChild(li);
      });
      document.getElementById("total").textContent = total;
      calculateTotal();
    }

    function calculateTotal() {
      let tipPercent = parseFloat(document.getElementById("tip").value) || 0;
      let grandTotal = total + (total * tipPercent / 100);
      document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
    }

    function submitOrder() {
      alert("Your order has been placed!");
      order = [];
      total = 0;
      updateOrderList();
    }

    function setupButton(buttonId, item, price) {
      document.getElementById(buttonId).addEventListener('click', function addClickListener() {
        var buttonContainer = document.getElementById(buttonId).parentElement;
        var uniqueId = Date.now(); // Unique ID based on the current timestamp
        buttonContainer.innerHTML = `
                <div class="buttons">
                    <button id="decrementButton${uniqueId}">&lt;</button>
                    <span id="counterValue${uniqueId}">1</span>
                    <button id="incrementButton${uniqueId}">&gt;</button>
                    <button id="doneButton${uniqueId}">Done</button>
                </div>
            `;

        var counterValue = document.getElementById('counterValue' + uniqueId);
        var decrementButton = document.getElementById('decrementButton' + uniqueId);
        var incrementButton = document.getElementById('incrementButton' + uniqueId);
        var doneButton = document.getElementById('doneButton' + uniqueId);

        decrementButton.addEventListener('click', function () {
          var value = parseInt(counterValue.textContent);
          if (value > 1) {
            counterValue.textContent = value - 1;
          } else {
            buttonContainer.innerHTML = `<button id="${buttonId}">Add</button>`;
            setupButton(buttonId, item, price);
          }
        });

        incrementButton.addEventListener('click', function () {
          counterValue.textContent = parseInt(counterValue.textContent) + 1;
        });

        doneButton.addEventListener('click', function () {
          var quantity = parseInt(counterValue.textContent);
          addToOrder(price * quantity, item);
          buttonContainer.innerHTML = `<button id="${buttonId}">Add</button>`;
          setupButton(buttonId, item, price);
        });
      });
    }

    setupButton('espressoAddButton', 'Espresso', 5);
    setupButton('cappuccinoAddButton', 'Cappuccino', 7);
    setupButton('coffeeWithMilkAddButton', 'Coffee With Milk', 10);
    setupButton('icedChaiLatteAddButton', 'Iced Chai Latte', 8);
    setupButton('latteAddButton', 'Latte', 5.5);
    setupButton('mochaLatteAddButton', 'Mocha Latte Costa Rica', 14);
    setupButton('frapeAddButton', 'Frape', 4);
    setupButton('caffeCorrettoAddButton', 'Caffe-Corretto', 14);
    setupButton('caramelMacchiatoAddButton', 'Iced Caramel Macchiato', 17.5);
    setupButton('doughnutAddButton', 'Doughnut', 30);
    setupButton('muffinAddButton', 'Muffin', 25);
    setupButton('bagelAddButton', 'Bagel', 20);
    setupButton('sconeAddButton', 'Scone', 20);
    setupButton('crepeAddButton', 'Crepe', 20);
    setupButton('pieAddButton', 'Pie', 50);
    setupButton('brownieAddButton', 'Brownie', 70);
    setupButton('cookieAddButton', 'Cookies', 30);
    setupButton('poundCakeAddButton', 'Pound Cake', 80);
    setupButton('swissRollAddButton', 'Swiss Roll', 150);

    document.addEventListener('DOMContentLoaded', function () {
      console.log('The DOM is fully loaded');
    });