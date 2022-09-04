export default () => ({
  showModal: false,

  toggleModal() {
    this.showModal = !this.showModal
  },

  openModal() {
    this.showModal = true
  },

  closeModal() {
    this.showModal = false
  }

})
