
// local reviews data
const reviews = [
  {
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];



// select items
const img = document.getElementById("person-img"); 
const author = document.getElementById("author");
const info = document.getElementById("info");
const job = document.getElementById("job");

const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".next-btn");

//set starting item 
let currentItem = 0; 
let person = reviews[currentItem];


//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem); 
});


//change image, author, job, and text
function showPerson(currentItem){
  
  img.src = person.img;
  author.textcontent = person.name;
  info.textContent = person.text;
  job.textContent = person.job
 
};

function next(currentItem){
  if (currentItem < reviews.length ) {
    currentItem ++;
    showPerson(currentItem); 
  }
}

function prev(currentItem){
  if (currentItem < 0) {
    currentItem = (reviews.length -1);
    showPerson(currentItem); 
  }
  return;
}