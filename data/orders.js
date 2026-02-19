export const orders = JSON.parse(localStorage.getItem('orders')) || [];
//JSON.parse() creates an array from teh string obtained from local storage

export function addOrder(order) {
  orders.unshift(order); //add the order to the front of the array
  saveToStorage();

}



//this function is used to save to local storage
function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}
