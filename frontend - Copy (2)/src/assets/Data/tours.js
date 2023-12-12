import tourImg01 from '../Images/tour-img01.jpg'
import tourImg02 from '../Images/tour-img02.jpg'
import tourImg03 from '../Images/tour-img03.jpg'
import tourImg04 from '../Images/tour-img04.jpg'
import tourImg05  from '../Images/tour-img05.jpeg'
import tourImg06 from '../Images/tour-img06.jpeg'
import tourImg07 from '../Images/tour-img07.jpeg'
import tourImg08 from '../Images/tour-img08.jpeg'

const tours = [
  {
    id: "01",
    title: "Bali Indonesia",
    city: "Indonesia",
    address: "Indonesia Emas 80119 Denpasar Bali",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.5,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Star Ferry Hongkong",
    city: "Hongkong",
    address:"Hong KongKowloon Point",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: " Opera House",
    city: "Sydney",
    distance: 500,
    address:"Macquarie Street Sydney ",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Phuket Thailand",
    city: "Thailand",
    distance: 500,
    address:"southern Thailand. ",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Dal Lake",
    city: "Kashmir",
    distance: 500,
    address:" Srinagar ",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Maldives Island",
    city: "Maldives",
    distance: 500,
    address:"Maldives ",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "TajMahal",
    city: "Agra",
    distance: 500,
    address:"Agra, U.P",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Bora Bora Island",
    city: "Mauritius",
    distance: 500,
    address:"Dormant volcano island",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
