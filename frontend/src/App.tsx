import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import './index.css';
import { NhostProvider } from '@nhost/react';
import { nhost } from './lib/nhost';

function App() {
  const [authopen , setauthopen] = useState<boolean>(false)
  useEffect(()=>{
    if(nhost.auth.isAuthenticated()){
      setauthopen(false)
  }},[nhost.auth.isAuthenticated()])  
  const showAuth = ()=>{
    setauthopen(!authopen)
  }

  return (
    <NhostProvider nhost={nhost}>

    <div className="min-h-screen bg-gray-300">

      <Navbar showAuth={showAuth}/>
      <SearchSection authopen = {authopen} />
    </div>
    </NhostProvider>
  );
}

export default App;