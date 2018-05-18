function placeAnOrder(orderNumber) {
  console.log("Customer order: ", orderNumber);

  cookAndDeliverFood(function() {
    console.log("Delivered food order: ", orderNumber)
  });
}

// smulate a 5 sec operation
function cookAndDeliverFood(cb) {
  setTimeout(cb, 5000);
}

// simulate web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
