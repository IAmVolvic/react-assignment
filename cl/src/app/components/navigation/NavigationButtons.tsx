import { NavLink } from "react-router-dom"

import { FaHouse } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa6";
import { FaDisease } from "react-icons/fa6";


export const NavigationButtons = () => {

	return (
       <div className="flex flex-col justify-center items-center">

          <NavLink className={(values) => `flex flex-row items-center gap-3 w-full px-4 py-3 rounded-2xl text-base-content ${values.isActive  ? 'bg-base-300' : ''}` } to="/">
               <FaHouse size={"1.2rem"} />
               <div> Home </div>
          </NavLink>

          <NavLink className={(values) => `flex flex-row items-center gap-3 w-full px-4 py-3 rounded-2xl text-base-content ${values.isActive  ? 'bg-base-300' : ''}` } to="/patients">
               <FaUserInjured size={"1.2rem"} />
               <div> Patients </div>
          </NavLink>

          <NavLink className={(values) => `flex flex-row items-center gap-3 w-full px-4 py-3 rounded-2xl text-base-content ${values.isActive  ? 'bg-base-300' : ''}` } to="/diseases">
               <FaDisease size={"1.2rem"} />
               <div> Diseases </div>
          </NavLink>

       </div>
	)
}