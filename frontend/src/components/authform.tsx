import { useState } from "react";
import { nhost } from "../lib/nhost";
import toast from "react-hot-toast";

const Authform = ({setauthopen}:{setauthopen:(x: boolean)=>void}) => {

 const [userinfo, setuserinfo] = useState<{email:string,password:string}>({email:"",password:""})
 const [variant, setvariant] = useState<"LOGIN" | "SINGUP">("LOGIN")
const handlesubmitauth =async ()=>{
 if(variant=="LOGIN"){
 
 const result = await nhost.auth.signIn(userinfo)
    if(result?.session?.accessToken){
        toast.success("Logged in successfully")
        setauthopen(false)
    }
 }
 else{
   const result = await nhost.auth.signUp(userinfo)
   console.log(result)
   if(result.error){
        toast.error(result.error.message)
   }
   else{

       toast.success("Verification email sent")
    }
 }
}
 return (
  
 <div className="flex flex-col space-y-5 items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50">
<div className="text-4xl text-white font-bold">
  {variant=="LOGIN" ? "Login" : "Signup"}
  </div>  
  <div className="flex flex-col">

  <label htmlFor="email" className="text-white text-3xl text-start font-bold ">Email</label>
  <input type="text" onChange={(e)=>setuserinfo({...userinfo, email:e.target.value})} name="email" className="border-2 border-black p-2 rounded-xl"/>
  </div>
  
  <div className="flex flex-col">
  <label htmlFor="password" className="text-white text-3xl text-start font-bold ">Password</label>
  <input type="text" onChange={(e)=>setuserinfo({...userinfo, password:e.target.value})} name="password" className="border-2 border-black p-2 rounded-xl"/>
  </div>
    <button onClick={handlesubmitauth} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md">
          {variant=="LOGIN" ? "Login" : "Signup"}
        </button>
    <div onClick={()=>{
      if(variant=="LOGIN"){
        setvariant("SINGUP")
      }
      else{
        setvariant("LOGIN")
      } }} className="text-white font-bold cursor-pointer ">{variant=="LOGIN" ? "new user ? Signup " : "already have a accound? Login"}</div>
</div>
  )
}

export default Authform;