const Banner = () => {
    return (
        <div className="container mx-auto my-10 bg-[url('./assets/images/banner.png')] bg-no-repeat h-[600px] rounded-3xl">
            <div className="text-center space-y-4 pt-40">
            <h1 className="text-5xl font-lexend font-bold text-white  md:w-[900px] mx-auto ">Discover an exceptional cooking  class tailored for you!</h1>
            <p className="text-white md:w-[900px] mx-auto ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="space-x-8">
                <button className="bg-[#0BE58A] p-3 rounded-full text-xl font-semibold">Explore Now</button>
                <button className="btn btn-outline text-white text-xl font-semibold ">Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;