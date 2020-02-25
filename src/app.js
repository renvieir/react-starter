const app = document.getElementById("app");
function sayHello() {
  app.innerHTML = "<h1>Ola dev</h1>";
}

module.exports.sayHello = sayHello;
