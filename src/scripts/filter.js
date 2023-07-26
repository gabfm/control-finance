const allValuesButton = document.querySelector('.filter__button--all')

allValuesButton.addEventListener('click', ()=> {

    
renderCards()

})


const entryButton = document.querySelector('.filter__button--entry')
entryButton.addEventListener('click', () =>{

    const entryValues = insertedValues.filter((element) => element.categoryID == 0 )

    const entryFiltredValues = entryValues.map((insertedValues) => createCard(insertedValues))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    entryFiltredValues.forEach((element) => mainList.append(element))
   

})

const exitButton = document.querySelector('.filter__button--exit')
exitButton.addEventListener('click', () =>{

    
    const exitValues = insertedValues.filter((element) => element.categoryID == 1)
    const exitFiltredValues = exitValues.map((insertedValues) => createCard(insertedValues))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    exitFiltredValues.forEach((element) => mainList.append(element))
 

})