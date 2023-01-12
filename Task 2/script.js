var button = document.getElementById("button")
button.addEventListener("click", validate);

function validate() {

    let name = document.getElementById('name');
    let comments = document.getElementById('comments');
    let x = document.querySelector('input[name="gender"]:checked');
    let male = document.getElementById('male');

    if (name.value === '') {
        alert('All fields are compulsory');
        name.focus();
    } else if (comments.value === '') {
        alert('All fields are compulsory');
        comments.focus();
    } else if (x === null) {
        alert('All fields are compulsory');
        male.checked = true;
    }
}