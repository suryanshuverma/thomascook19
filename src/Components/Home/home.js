import React,{useState} from 'react'
import Carousel from '../Carousel/carousel'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./home.css";

const Home = () => {
  const [isOpen,setIsOpen] = useState(true);
  const readMore = "...read more";
  return (
    <>
    
    <Carousel/>
    <section class="main-content">
      <h2 class="main-heading">International Holiday Packages</h2>
      <p class="main-caption">Whether it’s your first international trip or you have travelled abroad multiple times, planning a holiday to a distant land
       is always a special feeling.
          <span onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "Our international holiday packages are well-made and hold a high reputation among customers who have been travelling with us.": `${readMore}`}
          </span>   

</p>

    </section>
   
  </>
  )
}

export default Home