const cardContainer = document.querySelector('#cardContainer')
const alumniContainer = document.querySelector("#alumni_container")

const cardData = [
  {
    image: '1',
    title: 'Starter',
    body: "Free class access for that start learning code and design"
  },
  {
    image: '2',
    title: 'Premium',
    body: "Advance material from the Starter & learn to build projects"
  },
  {
    image: '3',
    title: 'Superstar',
    body: "Materials for expoerts who have completed the premium package"
  },
  {
    image: '4',
    title: 'Bootcamp',
    body: "Informatics science training program with the latest material"
  },
]

const alumniData = [
  {
    image: '1',
    title: "Jason Todd",
    subTitle: "Entreprenuer",
    body: "The mentor is cool, how to convey each material is also detailed and easy to understand.."
  },
  {
    image: '2',
    title: "Cassandra K",
    subTitle: "Web Developer",
    body: "The mentor is cool, how to convey each material is also detailed and easy to understand.."
  },
  {
    image: '3',
    title: "Peter Parker",
    subTitle: "Spiderman",
    body: "The mentor is cool, how to convey each material is also detailed and easy to understand.."
  },
  {
    image: '4',
    title: "Jean Kodok",
    subTitle: "Fighter",
    body: "The mentor is cool, how to convey each material is also detailed and easy to understand.."
  },
]

function renderCard(image, title, body) {
  const card = `
     <div class="card w-1/5 h-[330px] p-10 bg-white rounded-lg hover:bg-primary-purple hover:text-white duration-300 ease-in-out hover:cursor-pointer">
        <div class="card-image py-2">
          <img src="./src/img/card/${image}.png" alt="Starter">
        </div>
        <div class="card-title py-2 font-bold text-2xl">
          <p>${title}</p>
        </div>
        <div class="card-body py-2">
          <p>${body}</p>
        </div>
        <div class="card-footer py-2">
          <button class="w-full py-2 px-6 rounded-lg bg-secondary-teal text-white font-bold">
            See Class
          </button>
        </div>
      </div>
    `
  cardContainer.insertAdjacentHTML('afterbegin', card)
}

function renderAlumni(image, title, subTitle, body) {
  const card = `
     <div class="card w-1/6 border border-sky-600 rounded-md p-10  text-center">
        <div class="card-image relative">
          <img src="./src/img/alumni/${image}.png" alt="" class="absolute m-auto left-0 right-0 bottom-0">
        </div>
        <div class="card-title mt-5">
          <p class="font-bold py-2">${title}</p>
          <p class="text-secondary-gray">${subTitle}</p>
        </div>
        <div class="card-body py-2">
          <p>
            "${body}"
          </p>
        </div>
    </div>
    `
  alumniContainer.insertAdjacentHTML("afterbegin", card)
}

cardData.forEach(data => {
  const { image, title, body } = data
  renderCard(image, title, body)
})

alumniData.forEach(data => {
  const { image, title, subTitle, body } = data
  renderAlumni(image, title, subTitle, body)
})