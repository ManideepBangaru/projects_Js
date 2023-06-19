const reviews = [
    {
        id: 0,
        name: "Manideep Bangaru",
        job: "Lead Data Scientist",
        img: "./ManideepProfilePic.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus officia qui vero perspiciatis animi ea obcaecati similique voluptatum eius commodi voluptas vel ipsam excepturi iure quibusdam inventore ex dolorum!",
    },
    {
        id: 1,
        name: "Manoj Bangaru",
        job: "Lead Business Analyst",
        img: "./manoj.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus officia qui vero perspiciatis animi ea obcaecati similique voluptatum eius commodi voluptas vel ipsam excepturi iure quibusdam inventore ex dolorum!",
    },
    {
        id: 2,
        name: "Albert",
        job: "Subject Matter Expert",
        img: "./albert.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus officia qui vero perspiciatis animi ea obcaecati similique voluptatum eius commodi voluptas vel ipsam excepturi iure quibusdam inventore ex dolorum!",
    },
    {
        id: 3,
        name: "Cooper S",
        job: "Business Analyst",
        img: "./cooper.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus officia qui vero perspiciatis animi ea obcaecati similique voluptatum eius commodi voluptas vel ipsam excepturi iure quibusdam inventore ex dolorum!",
    },
    {
        id: 4,
        name: "einstein",
        job: "Head of SME",
        img: "./einstein.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus officia qui vero perspiciatis animi ea obcaecati similique voluptatum eius commodi voluptas vel ipsam excepturi iure quibusdam inventore ex dolorum!",
    },

]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 1;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson()
})

// show person based on item
showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
        showPerson(currentItem)
    }
    else{
        showPerson(currentItem)
    }
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
        showPerson(currentItem)
    }
    else{
        showPerson(currentItem)
    }
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})