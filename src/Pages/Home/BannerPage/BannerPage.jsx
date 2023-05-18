import photo from '../../../assets/car1.png'

const BannerPage = () => {
    return (
        <div className="hero h-96	" style={{ backgroundImage: `url(${photo})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Rev Up the Fun</h1>
            <p className="mb-5">Welcome to Kids Gallary, Discover Exciting Toy Cars for Kids!</p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default BannerPage;