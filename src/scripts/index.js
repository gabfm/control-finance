/* Desenvolva sua lógica aqui */

  const createCard = (element) => {
    const card = document.createElement('li')
    const value = document.createElement('span')
    const category = document.createElement('p')
    const deleteBtn = document.createElement('img')
    const asideBar = document.createElement('div')
  
    asideBar.classList.add('lateral__info')
    card.classList.add('list__card')
    value.innerText = `R$ ${element.value.toFixed(2)}`
    category.innerHTML = valuesCategory[element.categoryID]
  
    deleteBtn.id = element.id
    deleteBtn.src = "./src/img/trash.svg"
    deleteBtn.classList.add('delete__button')

    deleteBtn.addEventListener('click', ()=>{
      const found = insertedValues.find((element) => +element.id === +deleteBtn.id) 
  
      let foundIndex = insertedValues.findIndex((element)=> element.id == found.id )
      insertedValues.splice(foundIndex,1)
    
      card.remove()

      sumValues(insertedValues)
       
    })
  
    asideBar.append(category,deleteBtn)
    card.append(value,asideBar )
    
    return card
  }

  
  
  const renderCards = () => {
    
    
    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    insertedValues.forEach((element) => {
        
    const card = createCard(element)
    
    mainList.appendChild(card)

    })
  
  }

  renderCards()

  const sumValues = () => {
    const entryValues = insertedValues.filter((element) => element.categoryID == 0 )

    let totalEntryValues = entryValues.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    const exitValues = insertedValues.filter((element) => element.categoryID == 1)

    let totalExitValues = exitValues.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    
    let sum = document.querySelector(".sum_all--Values")

    sum.innerText = ""
    sum.innerText = `R$${(totalEntryValues - totalExitValues).toFixed(2)}`


  
}

sumValues(insertedValues)


