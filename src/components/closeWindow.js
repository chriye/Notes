function updateForm(e) {
    const addingDiv = document.getElementsByClassName('addNotesBlock')[0];
    addingDiv.remove();
    props.setShowBox(false);
}