const create = document.querySelector('.create')
const addOne = document.querySelector('.add-one')
const footer = document.querySelector('.footer-task')
const hasClass = addOne.nextElementSibling.classList.contains('first')
const todo = document.querySelector('.todo-task')
const alltodo = document.querySelectorAll('.todo-task')
const clear = document.querySelector('.clear')
var arrayActiveClear = []
var arrayAll = [todo]

function handleKey(e) {
  if (e.key === 'Enter' && !(create.value === '') && hasClass) {
    if (todo.classList.contains('first') && todo.style.display === 'none') {
      todo.style.display = 'flex'
      todo.children[0].lastChild.previousSibling.innerHTML = create.value
      create.value = ''
      increment++
      countFunction()
      arrayAll.push(todo)
    } else {
      const add = document.querySelector('.todo-task')
      const clone = add.cloneNode(true)
      arrayAll.push(clone)
      clone.children[0].children[0].children[0].classList.remove('active')
      clone.children[0].children[0].classList.remove('active')
      clone.children[0].lastChild.previousSibling.style.textDecoration = 'none'

      const container = document.querySelector('.container')
      const containerLast =
        document.querySelector('.container').lastChild.previousSibling
      clone.classList.remove('first')
      clone.children[0].lastChild.previousSibling.innerHTML = create.value
      clone.style.marginTop = '0px'
      container.insertBefore(clone, containerLast)
      create.value = ''
      increment++
      countFunction()
    }
  }
}

function handleClick(e) {
  e.classList.toggle('active')
  e.children[0].classList.toggle('active')
  if (e.classList.contains('active')) {
    e.nextElementSibling.style.textDecoration = 'line-through'
    arrayActiveClear.push(e.parentElement.parentElement)
    arrayAll.shift(e.parentElement.parentElement)
  } else {
    e.nextElementSibling.style.textDecoration = 'none'
    arrayActiveClear.shift(e.parentElement.parentElement)
    arrayAll.push(e.parentElement.parentElement)
  }
}
var increment = todo.length

create.addEventListener('keydown', handleKey)

function remove(e) {
  console.log(e.previousElementSibling.children[1])
  if (e.parentElement.classList.contains('first')) {
    e.parentElement.style.display = 'none'
    e.parentElement.children[0].children[0].classList.remove('active')
    e.parentElement.children[0].children[0].children[0].classList.remove(
      'active'
    )
    e.previousElementSibling.children[1].style.textDecoration = 'none'
    e.previousElementSibling.children[1].style.color = 'hsl(235, 19%, 35%)'
    increment--
    countFunction()
  } else {
    e.parentElement.remove()
    increment--
    countFunction()
  }
  arrayAll.shift(e.parentElement)
}
const count = document.querySelector('.items-count')

function countFunction() {
  if (increment > 1 || increment == 0) {
    count.innerHTML = `${increment} items left`
  } else if ((increment = 1)) {
    count.innerHTML = `${increment} item left`
  }
}
countFunction()

function clearCompleted() {
  arrayActiveClear.forEach((item, index) => {
    if (index === 0) {
      item.style.display = 'none'
      increment = increment - 1
      countFunction()
    } else {
      item.remove()
      increment += -1
      arrayActiveClear = []
    }
  })
  countFunction()
}

clear.addEventListener('click', clearCompleted)

const completed = document.querySelector('.completed')

function showCompleted(e) {
  e.preventDefault()
  allTasks.style.color = 'hsl(236, 9%, 61%)'
  allTasks.style.color = 'hsl(236, 9%, 61%)'
  completed.style.color = 'hsl(220, 98%, 61%)'
  arrayActiveClear.forEach(item => {
    if (item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'flex'
    }
  })
  arrayAll.forEach(item => {
    if (!item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'none'
    }
  })
}

completed.addEventListener('click', showCompleted)

const activeTasks = document.querySelector('.active-tasks')
const allTasks = document.querySelector('.all')

activeTasks.addEventListener('click', showActives)

function showActives(e) {
  e.preventDefault()
  completed.style.color = 'hsl(236, 9%, 61%)'
  allTasks.style.color = 'hsl(236, 9%, 61%)'
  activeTasks.style.color = 'hsl(220, 98%, 61%)'
  arrayActiveClear.forEach(item => {
    if (item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'none'
    }
  })
  arrayAll.forEach(item => {
    if (!item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'flex'
    }
  })
}

allTasks.addEventListener('click', showAll)

function showAll(e) {
  e.preventDefault()
  completed.style.color = 'hsl(236, 9%, 61%)'
  allTasks.style.color = 'hsl(220, 98%, 61%)'
  activeTasks.style.color = 'hsl(236, 9%, 61%)'
  arrayActiveClear.forEach(item => {
    if (item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'flex'
    }
  })
  arrayAll.forEach(item => {
    if (!item.children[0].children[0].classList.contains('active')) {
      item.style.display = 'flex'
    }
  })
}

// dark mode

const dark = document.querySelector('.moon')
const light = document.querySelector('.sun')
const bgTop = document.querySelector('.bg-top img')
const input = document.querySelector('.add-one input')
const todoSpan = document.querySelector('.todo-task span')
const letterColor = document.querySelector('*')
dark.addEventListener('click', darkmode)
light.addEventListener('click', lightmode)

function darkmode() {
  dark.classList.add('hide')
  light.classList.remove('hide')
  bgTop.src = '././images/bg-desktop-dark.jpg'
  document.body.style.background = 'hsl(235, 24%, 19%)'
  addOne.style.background = 'hsl(237, 14%, 26%)'
  todo.style.background = 'hsl(237, 14%, 26%)'
  footer.style.background = 'hsl(237, 14%, 26%)'
  footer.style.color = 'hsl(233, 11%, 84%)'
  input.style.background = 'hsl(237, 14%, 26%)'
  input.style.color = 'hsl(233, 11%, 84%)'
  letterColor.style.color = 'hsl(233, 11%, 84%)'
  todoSpan.style.color = 'hsl(233, 11%, 84%)'
  document.querySelector('.cross path').style.fill = 'white'
  document.querySelector('.myname').style.color = 'white'
  if (window.innerWidth < 768) {
    bgTop.src = '././images/bg-mobile-dark.jpg'
  } else {
    bgTop.src = '././images/bg-desktop-dark.jpg'
  }
}
function lightmode() {
  light.classList.add('hide')
  dark.classList.remove('hide')
  bgTop.src = '././images/bg-desktop-light.jpg'
  document.body.style.background = 'hsl(0, 8%, 93%)'
  addOne.style.background = 'hsl(0, 0%, 98%)'
  todo.style.background = 'hsl(0, 0%, 98%)'
  footer.style.background = 'hsl(0, 0%, 98%)'
  footer.style.color = 'hsl(235, 19%, 35%)'
  input.style.background = 'hsl(0, 0%, 98%)'
  input.style.color = 'hsl(235, 19%, 35%)'
  letterColor.style.color = 'hsl(235, 19%, 35%)'
  todoSpan.style.color = 'hsl(235, 19%, 35%)'
  document.querySelector('.cross path').style.fill = 'black'
  if (window.innerWidth < 768) {
    bgTop.src = '././images/bg-mobile-light.jpg'
  } else {
    bgTop.src = '././images/bg-desktop-light.jpg'
  }
}
const small = window.matchMedia('(max-width: 768px)').matches
