document.addEventListener('DOMContentLoaded', () => {
  const editProjectsBtn = document.getElementById('edit-projects');
  const closeModalBtn = document.getElementById('close-modal');
  const editModal = document.getElementById('modal');

  function openModal() {
      editModal.showModal();
  }

  function closeModal() {
      editModal.close();
  }

  // Ajout d'un écouteur d'événement uniquement si l'élément existe
  editProjectsBtn?.addEventListener('click', openModal);
  closeModalBtn?.addEventListener('click', closeModal);
});
