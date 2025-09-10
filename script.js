//your JS code here. If required.
const form = document.getElementById("loginForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
	 const firstName = form.elements["First Name"].value;
  const lastName = form.elements["Last Name"].value;
  const phone = form.elements["Phone Number"].value;
  const email = form.elements["Email ID"].value;
	const message = 
    `First Name: ${firstName} ` +
    `Last Name: ${lastName} ` +
    `Phone Number: ${phone} ` +
    `Email ID: ${email}`;
	alert(message);
});