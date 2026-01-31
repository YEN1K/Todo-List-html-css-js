* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.container {
  background: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-area {
  display: flex;
  gap: 5px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#addBtn {
  background-color: #4caf50;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #eee;
}

li span {
  flex: 1;
  margin-left: 8px;
}

li.completed span {
  text-decoration: line-through;
  color: #aaa;
}

li button {
  background-color: #ff5252;
  color: white;
  margin-left: 8px;
}

.filter {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
}

.filter button {
  background-color: #ddd;
}

.filter button.active {
  background-color: #4caf50;
  color: white;
}

li button {
  transition: opacity 0.2s ease;
}
