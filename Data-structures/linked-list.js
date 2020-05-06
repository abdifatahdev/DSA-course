// Linked List 

// 1. Arrays (1 or 2 problems)
// 2. Strings (1 or 2 problems)
// 3. LinkedList (3 or 4 problems)
// 4. Stacks (1 or 2 problems)
// 5. Queues (1 or 2 problems)
// 6. Graphs (4 to 5)
// 7. Trees ()

// 1. First waxaa create garaynay Class LinkedList 
// 2. Constructor (node)
// 3. next (Pointer) wuxuuna ku point graynayaa ugu horreyn NULL. Kadib value walba oo ku darto iyo 
// markaas ku Point garaysmayaa 

class LinkedList {
  constructor(data) {
    this.val = data; 
    this.next = null; 
  }
}

function printList(head) {
  let list = ""
  while (head != null) {
    list += head.val + " -> "
    head = head.next; 
  }
  console.log(list);
}

function addNode(head, node) {
  let current = head; 
  while (current.next != null) {
      current = current.next; 
  }
  current.next = new LinkedList(node); 
}

 function removeHead(head){
   if(head !== null){
     head = head.next
   }
   return head;
 }

function addNodeToHead(head, node) {
 let newNode = new LinkedList(node);
  newNode.next = head;
  head = newNode; 
  return head; 
}

// 1 -> 2 -> 9 -> 34 -> null 
// 99 -> null 

let head = new LinkedList(1); 
addNode(head, 2)
addNode(head, 9); 
addNode(head, 34); 

printList(head); 

// Create function that removes the head 
// of the Linked List  (solved)

// Create a function to add node to the front of the linked list 

let newList = addNodeToHead(head, 99);


// newList = removeHead(head); 

printList(newList)
// 2 9 34 

let newList2 = addNodeToHead(newList, 114); 
printList(newList2)