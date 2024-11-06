import { useEffectAllContact } from "../hooks/useEffectAllContact";

const Sidebar = () => {
    // localStorage.getItem('');

    const { data, error } = useEffectAllContact()
    console.log(data);
    return (
        <div className="p-5 border border-gray-600 h-full">
            <h1 className="">Chats</h1>
            <br />
            <ul>
                <li>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </li>
                <UserEl />
                <UserEl />
                {/* <li>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                    alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
};
export default Sidebar;


const UserEl = () => {
    return (
        <li>
            <div className="flex items-center gap-3 mb-5">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                        />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            </div>
        </li>

    )
}