// LocalStorege.setItem(cle, valeur)
// LocalStorege.getItem(cle)
// LocalStorege.clear()
// JSON.stringify(object)
// JSON.parse(string)

const local = JSON.parse(localStorage.getItem("user"));

if (local != null) {
    if (local.nom != "" && local.age != "") {
        form.style.display = "none";
        h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans !`
    } else {
        alert("Veuillez remplir le formulaire")
    }
}

button.onclick = (e) => {
    const user = {
        nom: nom.value,
        age: age.value
    }

    localStorage.setItem("user", JSON.stringify(user));
    document.location.reload();
}

clear.onclick = (e) => {
    localStorage.clear();
    document.location.reload();
} 