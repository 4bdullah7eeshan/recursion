// ====================================
// RECURSIVE STRUCTURES: LINKED LISTS
// ====================================

let linkedList;

// ------- Creating A LL -------
linkedList = { value: 1 };
linkedList.next = { value: 2 };
linkedList.next.next = { value: 3 };
linkedList.next.next.next = { value: 4 };
linkedList.next.next.next.next = null;

console.log(linkedList);

// ------- Split a LL into two parts -------
// Step 1: Declare new LL
let secondLinkedList;
// Step 2: Set it up: Assign the split part
secondLinkedList = linkedList.next.next;
// Step 3: Split the original one at the point ....
linkedList.next.next = null;

console.log(linkedList);
console.log(secondLinkedList);

// To join it back:
linkedList.next.next = secondLinkedList;
console.log(linkedList);

// ------- Prepend a new value -------
// To prepend a new value, we need to update the head of the list to do the following two things:
// 1. Insert the new Value
// 2. Make the earlier "first" value the "second" one
linkedList = { value: 'New', next: linkedList };
console.log(linkedList);

// ------- Remove a value -------
// To remove a value from the middle, change `next` of the previous one:
linkedList.next = linkedList.next.next;
console.log(linkedList);

