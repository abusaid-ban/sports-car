import img1 from '../../../assets/p-1.png'
import img2 from '../../../assets/p-2.png'
import img3 from '../../../assets/p-3.png'
import img4 from '../../../assets/p-4.png'
import cover from '../../../assets/cover2.png'

const GallarySection = () => {
    return (
       <div   style={{ backgroundImage: `url(${cover})` }}>
        <div>
            <h2 className=' py-4 text-center text-5xl text-white bg-slate-500'>Our Latest Includes:</h2>
        </div>
         <div className="carousel w-1/2 mx-auto mt-24">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-3/4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
       </div>
    );
};

export default GallarySection;