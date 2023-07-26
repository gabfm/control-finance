/* Desenvolva sua lógica aqui */
let idAtual = 0
let valueTypeSelected = 0

function createModal() {

  const inputValue = document.querySelector(".new__value")

  const buttonSubmit = document.querySelector(".submit__button")
  
  buttonSubmit.addEventListener('click', () => {


      if(selected ==true && inputValue.value !== ''){          
          const newElement = {
          id: idAtual,
          value: +inputValue.value,
          categoryID: +valueTypeSelected,
      }

      insertedValues.push(newElement)

      renderCards()

      sumValues(insertedValues) 
  }
  })


  let selected = false
  const entryLabel = document.querySelector(".new__entry")

  entryLabel.addEventListener('click', ({ target }) => {

      valueTypeSelected = target.id
      target.classList.add('active')
      target.nextElementSibling.classList.remove('active')
      selected = true

  })


  const exitLabel = document.querySelector(".new__exit")

  exitLabel.addEventListener('click', ({ target }) => {

      valueTypeSelected = target.id
      target.classList.add('active')
      target.previousElementSibling.classList.remove('active')
      selected = true


  })
 
  idAtual++
}
createModal()

const handleModal = () => {
  const modal = document.querySelector(".modal__controller")
  const registerBtn = document.querySelector(".button__register--main")
  const buttonClose = document.querySelector(".close-modal")

  registerBtn.addEventListener("click", () => {
      modal.showModal()
  })
  buttonClose.addEventListener('click', () => {
    modal.close()
  })

 const cancelButton = document.querySelector(".cancel-modal")

 cancelButton.addEventListener('click', () => {
      
      modal.close()
  })
}




  handleModal()
