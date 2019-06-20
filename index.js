function getCart(){
  return cart;
}
function addToCart(item){
  var obj = {};
  obj[item]=Math.floor(Math.random()*100)
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var prodArr = []
  if (cart.length<1){
    console.log("Your shopping cart is empty.")
  } else {
    for (var product=0; product<cart.length;product++){
      for (var item in cart[product]) {
        prodArr.push(`${item} at $${cart[product][item]}`)
      }
    }
  }
  console.log(`In your cart, you have ${prodArr.join(', ')}.`)
}


function removeFromCart(key) {
  if (key === undefined){
    cart = [];
  } else {
    var arr = cart.filter(function(elem){
      return !(key in elem);
    })
    if (arr.length===cart.length){
      console.log("That item is not in your cart.")
    } else {
      cart = arr;
      return cart
    }
  }
}

function placeOrder(num){
  var t = total()
  if (num === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${t}, which will be charged to the card ${num}.`)
  }
  removeFromCart();
}
