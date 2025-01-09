import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import './index.css';
import { NhostProvider } from '@nhost/react';
import { nhost } from './lib/nhost';

function App() {
  const [authopen , setauthopen] = useState<boolean>(true)  
  useEffect(()=>{
    handleauthentication()
  },[nhost.auth.isAuthenticated()])
  const handleauthentication = async()=>{
    if(await nhost.auth.isAuthenticatedAsync()){
      setauthopen(false)
    }
    else{
      setauthopen(true)
    }
  }
  return (
    <NhostProvider nhost={nhost}>

    <div className="min-h-screen bg-gray-300">

      <Navbar authopen={authopen} setauthopen={setauthopen} />
      <SearchSection authopen = {authopen} setauthopen={setauthopen} />
    </div>
    </NhostProvider>
  );
}

export default App;