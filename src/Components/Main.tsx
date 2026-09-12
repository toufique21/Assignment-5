import Picture from "../assets/banner-stack.png"

const Main = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div className="space-y-8">
                <h3 className="text-6xl font-bold">Build Your Ideal <br /> 
                <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] 
                bg-clip-text text-transparent">Development Stack</span></h3>
                <p className="font-light text-gray-500">Explore frontend, backend, database and tooling option,<br />
                 compare them side by side, and put together the stack that fits your <br />
                  next project.</p>
                  <div className="flex gap-4 mt-20">
                    <button className="font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] 
                    p-2 rounded-lg">Explore Technologies</button>
                    <button className="border-1 rounded-lg px-10 py-2 font-light text-gray-500">Learn More</button>
                  </div>
            </div>
            <div>
                <img src={Picture} alt="" />
            </div>
        </div>
    );
};

export default Main;