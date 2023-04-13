const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {//это метод, который добавляет новый узел в дерево. Создает новый узел, если дерево пустое, то новый узел становится корневым.
    //Если дерево не пустое, то находит место для нового узла в дереве, сравнивая его значение с текущими узлами и переходит на левый или правый потомок до тех пор, пока курва не найдет подходящее место чотбы сделать planting bomb
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        // если кто есть не делать ничего
        return;
      }
    }
  }

  has(data) {//это метод, который проверяет, есть ли узел с данным значением в дереве. если меньше налево, если больше направо и пока не найдет
    let currentNode = this._root;

    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true; // нашел
      }
    }

    return false; // не нашел =С
  }

  find(data) { // эта чипуха работает точно также по поиску только в итоге возвращает то самое что надо или валит нуль
    let currentNode = this._root;

    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // нашел типа
        if (node.left === null && node.right === null) {
          //это если типа листик
          return null;
        }

        if (node.left === null) {
          //это если правый чилд
          return node.right;
        }

        if (node.right === null) {
          // есть у него только левый чилд
          return node.left;
        }

        // если полный боекомплект
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this._root = removeNode(this._root, data);
  }

  min() {//ну минимум же по левому :D
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() { // ну тут самое большое тут ясно
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
