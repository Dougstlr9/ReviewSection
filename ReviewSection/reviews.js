
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


//set inner html when DOM loads
let index = 0;

const snapshot = document.getElementById("snapshot"); 
const person = document.getElementById("name"); 
const jobtitle = document.getElementById("jobtitle"); 
const review = document.getElementById("review"); 

function swapinfo () {
  snapshot.src = reviews[index].img;
  person.innerHTML = reviews[index].name;
  jobtitle.innerHTML = reviews[index].job;
  review.innerHTML = reviews[index].text;
  }

next => {
    if (index >= reviews.length) {
        index = 0; 
        swapinfo();
    } else {
        swapinfo();
        index++; 
    }
}

function last(){
    if (index > 0 ) {
        swapinfo();
        index --;
    } else {
        index = reviews.length;
        swapinfo();
    }
}

document.addEventListener('DOMContentLoaded', swapinfo);

//let lbutton = document.getElementById('last-button').addEventListener("click", last());
//let nbutton = document.getElementById('next-button').addEventListener("click", next);
