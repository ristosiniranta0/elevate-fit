/* Filename: sophisticated_js_code.js */

// This code demonstrates the implementation of a sophisticated and complex JavaScript program.
// It is a simulated social media platform with user registration, login, post creation, and more.
// The code includes multiple classes, complex data structures, and functions that interact with each other.

// User Class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
  }

  addFriend(user) {
    this.friends.push(user);
  }
}

// Post Class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Social Media Platform Class
class SocialMediaPlatform {
  constructor() {
    this.users = [];
  }

  registerUser(username, password, email) {
    const user = new User(username, password, email);
    this.users.push(user);
  }

  loginUser(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    return user ? user : null;
  }
}

// Usage Example:
const platform = new SocialMediaPlatform();
platform.registerUser('exampleUser', 'password123', 'user@example.com');
platform.registerUser('anotherUser', 'pass987', 'another@example.com');

const user1 = platform.loginUser('exampleUser', 'password123');
const user2 = platform.loginUser('anotherUser', 'pass987');

user1.createPost('Hello, this is my first post!');
user2.createPost('Greetings from another user!');
user1.createPost('Here is another post!');
user1.addFriend(user2);
user2.addFriend(user1);

console.log(user1.posts);
console.log(user2.posts);
console.log(user1.friends);
console.log(user2.friends);

user1.posts[1].addLike();
user2.posts[0].addLike();
user2.posts[0].addComment('Nice post!');
user1.posts[1].addComment('Thanks!');

console.log(user1.posts[1]);
console.log(user2.posts[0]);