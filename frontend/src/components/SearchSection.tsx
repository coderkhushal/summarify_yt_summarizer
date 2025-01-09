import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Authform from "./authform";

const SearchSection = ({authopen}:{authopen : boolean}) => {
  const [transcript, settranscript] = useState<string | null> (null)
  const[loading, setloading] = useState<boolean>(false)
  const [url, seturl] = useState<string>("")
  const handlesubmit =async ()=>{
    setloading(true)
    console.log(url)
      const res = await fetch("https://n8n-dev.subspace.money/webhook/ytube", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "youtubeUrl":url
        })
      })
      const data = await res.json()
      console.log(data)
      if(res.status==200){

        settranscript(data.description)
        toast.success("Transcript generated successfully")
        
      }
      else{
       
        toast.error("Error generating transcript")
      }
      setloading(false)
  }


  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-indigo-50 to-white px-4">
      <Toaster
  position="top-center"
  reverseOrder={false}
/><Toaster/>
{authopen &&
<Authform/>}
      <div className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Summarize youtube videos in seconds
        </h1>
        <p className="text-lg text-gray-600">
          Just by entering the youtube video URL, you can get a summarized version of the video in seconds. 
        </p>
      </div>
      
      <div className="w-full max-w-2xl flex gap-2">
        <div className="relative flex-1">
          <input
          onChange={(e)=>seturl(e.target.value)}
            type="text"
            placeholder="Enter youtube video url"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
          />
          {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
        </div>
        <button onClick={handlesubmit} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md">
          Generate
        </button>

      </div>
      {/* {url!="" && <iframe className="mt-10"  height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} */}
      <h1 className="font-bold mb-10 mt-20 text-3xl">Summary</h1>
    {!loading ? <div className="w-2/3 border-4 mx-20 mb-20 h-96 bg-white font-sans p-4 rounded-xl border-black overflow-y-scroll">{transcript} </div> : <div>Loading</div>}      
    </div>
  );
};

export default SearchSection;