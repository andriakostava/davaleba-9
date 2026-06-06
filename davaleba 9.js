class Todo {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isDone = false;
        this.createdAt = new Date();
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        const todo = new Todo(Date.now(), title);
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    checkActiveTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);

        if (todo) {
            todo.isDone = !todo.isDone;
        }
    }

    getAllTodos(filter = {}) {
        if (filter.active === true) {
            return this.todos.filter(todo => !todo.isDone);
        }

        if (filter.active === false) {
            return this.todos.filter(todo => todo.isDone);
        }

        return this.todos;
    }
}

const todos = new TodoList();

todos.addTodo("Study JS");
todos.addTodo("Workout");

todos.checkActiveTodo(todos.todos[0].id);

console.log(todos.getAllTodos());
console.log(todos.getAllTodos({ active: true }));
console.log(todos.getAllTodos({ active: false }));
//////////////////////////////////////////////////////////////
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addToCart(product) {
        this.items.push(product);
    }

    removeFromCart(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    updateItem(id, newData) {
        const item = this.items.find(item => item.id === id);

        if (item) {
            Object.assign(item, newData);
        }
    }

    calculateTotalPrice() {
        return this.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    }
}

const cart = new ShoppingCart();

cart.addToCart({
    id: 1,
    title: "Laptop",
    price: 2000,
    quantity: 1
});

cart.addToCart({
    id: 2,
    title: "Mouse",
    price: 50,
    quantity: 2
});

console.log(cart.calculateTotalPrice());
//////////////////////////////////////////////////////////////////////
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(
            book => book.title !== title
        );
    }

    listBooks(sortBy = null) {
        const copy = [...this.books];

        if (sortBy === "year") {
            return copy.sort((a, b) => a.year - b.year);
        }

        return copy;
    }
}

const library = new Library();

library.addBook(
    new Book("Clean Code", "Robert Martin", 2008)
);

library.addBook(
    new Book("JavaScript", "David Flanagan", 2020)
);

console.log(library.listBooks("year"));
/////////////////////////////////////////////////////
class Contact {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

class ContactManager {
    constructor() {
        this.contacts = [];
    }

    addNewContact(name, phone, email) {
        const emailExists = this.contacts.some(
            contact => contact.email === email
        );

        const phoneExists = this.contacts.some(
            contact => contact.phone === phone
        );

        if (emailExists) {
            throw new Error("Email already exists");
        }

        if (phoneExists) {
            throw new Error("Phone already exists");
        }

        this.contacts.push(
            new Contact(name, phone, email)
        );
    }

    viewAllContacts() {
        return this.contacts;
    }

    updatePhone(email, newPhone) {
        const contact = this.contacts.find(
            contact => contact.email === email
        );

        if (!contact) {
            throw new Error("Contact not found");
        }

        contact.phone = newPhone;
    }

    deleteContact(email) {
        this.contacts = this.contacts.filter(
            contact => contact.email !== email
        );
    }
}

const manager = new ContactManager();

manager.addNewContact(
    "Andria",
    "555123456",
    "andria@gmail.com"
);

manager.updatePhone(
    "andria@gmail.com",
    "599999999"
);

console.log(manager.viewAllContacts());
