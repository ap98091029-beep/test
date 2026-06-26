const form = document.getElementById("studentForm");
const studentsList = document.getElementById("studentsList");

const API_URL = "/api/students";

async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();

  studentsList.innerHTML = "";
  students.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = `${s.name} | ${s.phone} | ${s.className}`;
    studentsList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    className: document.getElementById("className").value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  form.reset();
  loadStudents();
});

loadStudents();
