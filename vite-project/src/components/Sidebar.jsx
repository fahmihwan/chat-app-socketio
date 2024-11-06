import { useDispatch, useSelector } from "react-redux";
import { useEffectAllContact } from "../hooks/useEffectAllContact";
import { setChooseUserSlice } from "../redux/features/chooseUserSlice";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { setUserSlice } from "../redux/features/userSlice";

const Sidebar = () => {
    const { data, error } = useEffectAllContact()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChooseUser = (d) => {

        dispatch(setChooseUserSlice({
            id: d?.id,
            fullname: d?.fullname,
            username: d?.username,
        }))
    }


    const logout = async () => {
        dispatch(setChooseUserSlice({}))
        dispatch(setUserSlice({}))
        localStorage.clear()
        sessionStorage.clear()
        Cookies.remove('token')
        Cookies.remove('user_id')
        navigate('/', { replace: true })
    }

    return (
        <div className="  border-gray-600 h-full bg-neutral">
            <div className="flex  w-full h-full">
                <div className="h-full w-[80px] bg-neutral border-r border-r-gray-600 flex flex-col-reverse p-2">
                    <button onClick={logout} className="bg-warning text-black p-2 mb-3 rounded-full">
                        Logout
                    </button>
                </div>

                <div className="w-full p-5">
                    <ul className="" >
                        <li>
                            <label className="input input-bordered flex items-center w-full mb-5 ">
                                <input type="text" className="" placeholder="Search" />
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-full opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg> */}
                            </label>
                        </li>

                        {data?.length > 0 && data.map((d, index) => (
                            <UserEl key={index} id={d.id} fullname={d?.fullname} username={d?.username} onClick={() => handleChooseUser(d)} />
                        ))}

                    </ul>
                </div>

            </div>


        </div >
    );
};
export default Sidebar;


const UserEl = ({ fullname, id, username, onClick }) => {
    const receiveUser = useSelector((state) => state.chooseUser);

    return (
        <li className={`cursor-pointer ${id == receiveUser.id ? "bg-[#1d232a]" : ""} rounded-lg `} onClick={(e) => onClick(e)}>
            <div className="flex items-center gap-3 mb-5 ">
                <div className="avatar">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 m-2 ">
                        <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="font-bold">{fullname}</div>
                    <div className="text-sm opacity-50">@{username}</div>
                </div>
            </div>
        </li>


    )
}