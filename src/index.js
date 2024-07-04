import LinkedList from "./linked_list.js";

let list = new LinkedList();

list.append(2).append(5).append(17).append(21).append(12);

console.log(list.toString());

console.log(list.head, list.tail());

list.head = null;
list.prepend(2).prepend(4).prepend(3);

console.log(list);

console.log(list.toString());

console.log(list.find(2), list.find(7));

list.insertAt(3, 67);

console.log(list.toString());

list.removeAt(3);

console.log(list.toString());
