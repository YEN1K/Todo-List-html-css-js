const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// 로컬스토리지에서 todo 불러오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

// 화면에 todo 그리기
function renderTodos() {
  todoList.innerHTML = "";

  let filteredTodos = [...todos];

// 필터 적용
if (currentFilter === "active") {
  filteredTodos = filteredTodos.filter(todo => !todo.completed);
  }  else if (currentFilter === "completed") {
  filteredTodos = filteredTodos.filter(todo => todo.completed);
  }

// 완료된 항목 맨 아래로
  //filteredTodos.sort((a, b) => a.completed - b.completed);
  
  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.completed) {
    li.classList.add("completed");
    }
    

    // 완료 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function () {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    // 할 일 텍스트
    const span = document.createElement("span");
    span.innerText = todo.text;

    // 삭제
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.style.display = todo.completed ? "inline-block" : "none";

    deleteBtn.addEventListener("click", function () {
      if (!confirm("정말 삭제하시겠습니까?")) return;

      const todoIndex = todos.indexOf(todo);
      todos.splice(todoIndex, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

// 로컬스토리지 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 추가 버튼 클릭
addBtn.addEventListener("click", function () {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("할 일을 입력하세요!");
    return;
  }

  const isDuplicate = todos.some(todo => todo.text === text);

  if (isDuplicate) {
    alert("이미 추가된 할 일입니다.");
    return;
  }

  todos.push({
    text: text,
    completed: false,
  });

  saveTodos();
  renderTodos();
  todoInput.value = "";
});

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

document.querySelectorAll(".filter button").forEach(button => {
  button.addEventListener("click", function () {
    const selectedFilter = button.dataset.filter;

    // 전체로같은 필터를 다시 누르면
    if (currentFilter === selectedFilter) {
      currentFilter = "all";
    } else {
      currentFilter = selectedFilter;
    }

    // 버튼 active 처리
    document.querySelectorAll(".filter button").forEach(btn =>
      btn.classList.remove("active")
    );

    if (currentFilter !== "all") {
      button.classList.add("active");
    }

    renderTodos();
  });
});

// 처음 화면 로드 시 실행
renderTodos();
