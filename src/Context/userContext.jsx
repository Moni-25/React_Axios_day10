import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext({
    userItem : [],
    updateUser : () => {},
})

export default function UserContextProvider({children})
{
    const [user, setUser] = useState([]);
    async function getUserData()
    {
        try{
            const res = await axios.get("https://mentor-student-1dic.onrender.com/api/user");
            setUser(res.data.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    useEffect(() => {
        getUserData();
        return () => {};
      }, []);

      const userContextValue = {
            userItem: user,
            updateUser: setUser
      }

      return(
        <userContext.Provider value={userContextValue}>
            {children}
        </userContext.Provider>
      )
}