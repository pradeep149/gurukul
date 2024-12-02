import { useState, useEffect } from "react"


const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth);
    })
    
    return ()=>{
      window.removeEventListener('resize',()=>{
        setWidth(window.innerWidth);
      })
    }
  },[])

  return (
      <div className="flex m-1 p-1">
        {(width > 768) ?
        <div className="text-black flex gap-5">
        <div>Logo</div>
        <div>About us</div>
        <div>Whatsapp</div>
        <div>Social</div>
        <div>Login</div>
        </div>
        : 
        <div className="text-black flex">
        <div>Logo</div>
        <div>Login</div>
        <div>Menu</div>
        </div>
        } 
      </div>

  )
}

export default Header