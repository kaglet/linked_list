import LinkedList from "./linked_list.js";

let list = new LinkedList();

list.append({key: 2, value: 3});
console.log(list.find({key: 2, value: 3}));

export default LinkedList;


