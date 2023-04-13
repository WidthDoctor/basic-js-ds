const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {//создаем креативим
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {//добавляет добро в конец всего добра или если нет добра делает добром в единственном и неповторимом
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;//добавляет новый узел в конец очереди, связывая его с предыдущим последним элементом
      this.tail = newNode; //обновляется на только что добавленный узел, чтобы указать на новый конец очереди:
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value; //Если очередь не пустая, сохраняет значение первого узла в переменной
    this.head = this.head.next; //обновляет head на следующий узел в очереди. ТАк тут предыдущее значение абонента не есть доступно, задзвоньте позже :D

    if (!this.head) {//после удаления будет Нуль чи не
      this.tail = null;
    }

    return value;
  }

  getUnderlyingList() {
    return this.head;
  }
}


module.exports = {
  Queue
};
