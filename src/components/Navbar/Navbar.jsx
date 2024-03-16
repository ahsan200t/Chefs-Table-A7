const Navbar = () => {
    return (
        <div className="container mx-auto my-10 ">
          <div className="navbar bg-base-100">
  <div className="navbar-start text-3xl font-bold font-lexend">
    <h1>Recipe Calories</h1>
  </div>
  <div className="lg:navbar-center gap-6 text-[#150B2BB3] font-lexend">
    <a href="">Home</a>
    <a href="">Recipes</a>
    <a href="">About</a>
    <a href="">Search</a>

  </div>
  <div className="navbar-end gap-4">
    <div className="flex">
        <input className="bg-[#150B2B0D] p-2 pl-4 text-xl rounded-full" type="text" placeholder="Search" />
       
    </div>
    <button className="btn btn-ghost btn-circle">
     <div className="bg-[#0BE58A]  rounded-full p-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

     </div>
    </button>
  </div>
</div>

        </div>
    );
};

export default Navbar;