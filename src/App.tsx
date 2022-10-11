import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import PlaceCard from './PlaceCard/PlaceCard';

const dataB = [{
  title: "Mount Fuji",
  location: "Japan",
  googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
  startDate: "12 Jan, 2021",
  endDate: "24 Jan, 2021",
  description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
},
{
  title: "Sydney Opera House",
  location: "Australia",
  googleMapsUrl: "https://goo.gl/maps/TW5mwNUX93koEzH3A",
  startDate: "27 May, 2021",
  endDate: "8 Jun, 2021",
  description: "They Sydney Opera House is a multi-venu performing arts centre in Sydney. LOcated on the banks of they Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
  imageUrl: "https://source.unsplash.com/JmuyB_LibRo"
},
{
  title: "Geirangerfjord",
  location: "nORWAY",
  googleMapsUrl: "https://goo.gl/maps/kkcCpAZj36nZXB6A6",
  startDate: "12 Oct, 2021",
  endDate: "24 Nov, 2021",
  description: "The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. It is located entirely int he Stranda Municipality",
  imageUrl: "https://source.unsplash.com/3PeSjpLVtLg"
},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col bg-[#D9BFA9]'>
      <header></header>
      { dataB.map(i => <PlaceCard {...i} />) }
    </div>
  )
}

export default App
