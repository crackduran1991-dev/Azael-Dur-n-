function copiarMacro(texto) {
    navigator.clipboard.writeText(texto)
    .then(() => {
        alert("Macro copiada correctamente ✅");
    })
    .catch(() => {
        alert("No se pudo copiar la macro");
    });
}
