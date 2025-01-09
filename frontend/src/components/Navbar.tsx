import { nhost } from "../lib/nhost";

const Navbar = ({authopen, setauthopen}:{authopen:boolean,setauthopen:(x: boolean)=>void}) => {

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Summarify</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              {!authopen && <button  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md bg-purple-900 " onClick={()=>{nhost.auth.signOut();setauthopen(true)}}>Logout</button>
}
              
            </div>
          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;