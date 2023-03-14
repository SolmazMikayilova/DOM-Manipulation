const form = document.querySelector('#myForm');
const name = document.querySelector('#input1');
const surname = document.querySelector('#input2');
const age = document.querySelector('#input3');
const email = document.querySelector('#input4');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const tableBody = document.querySelector('#myTable tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (name.value === '' || surname.value === '' || age.value === '' || email.value === '') {
    alert('Please fill out all fields.');
    return;
  }
  let genderValue;
  for (const genderInput of genderInputs) {
    if (genderInput.checked) {
      genderValue = genderInput.value;
      break;
    }
  }
  const newRow = document.createElement('tr');
  const Name = document.createElement('td');
  const Surname = document.createElement('td');
  const Age = document.createElement('td');
  const Mail = document.createElement('td');
  const Sexuality = document.createElement('td');
  Name.textContent = name.value;
  Surname.textContent = surname.value;
  Age.textContent = age.value;
  Mail.textContent = email.value;
  Sexuality.textContent = genderValue;
  newRow.appendChild(Name);
  newRow.appendChild(Surname);
  newRow.appendChild(Age);
  newRow.appendChild(Mail);
  newRow.appendChild(Sexuality);
  tableBody.appendChild(newRow);
  nameInput.value = '';
  emailInput.value = '';
  genderInputs[0].checked = true;
});
