/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
};
   // add an item to the top of the stack
Stack.prototype.add = function(value){
    this.stack.push(value);
   };

   // remove an item from the top of the stack
Stack.prototype.remove = function(){
  return this.stack.pop();
   };

   // return the number of items in the stack
Stack.prototype.size = function(){
  return this.stack.length;
   };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
};
   // called to add an item to the `queue`
  Queue.prototype.enqueue = function(value){
    this.inbox.add(value);
  };


   // called to remove an item from the `queue`
  Queue.prototype.dequeue = function(){
    var removedItem = this.inbox.stack.splice(0,1);
    this.outbox.add(removedItem);
  };


   // should return the number of items in the queue
  Queue.prototype.size = function(){
    return this.inbox.size();
 };