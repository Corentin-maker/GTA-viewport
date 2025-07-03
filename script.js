function verifier() {
  const valeur = document.getElementById("monNombre").value;
  const cible = 6;

  if (valeur === "") {
    document.getElementById("message").textContent = "⚠️ Tu dois saisir un nombre.";
    return;
  }

  const nombre = Number(valeur);

  if (isNaN(nombre)) {
    document.getElementById("message").textContent = "🚫";
  } else if (nombre === cible) {
    document.getElementById("message").textContent = `✅`;
  } else {
    document.getElementById("message").textContent = `❌`;
  }
}
