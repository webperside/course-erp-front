import { Menu } from '@headlessui/react'

export default function UserProfileDropdown() {
    const userData = {
        username: "Pixsellz", 
    };
    const { username } = userData;
    const firstLetter = username ? username.charAt(0) : "";
    return (
        <Menu>
            <Menu.Button className="user-part ">
            <div className="user-avatar">
                {firstLetter}
            </div>
            <div className="user-name">{username}</div>
            </Menu.Button>
            <Menu.Items className="mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg absolute top-[60px] right-4">
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className="flex gap-3 px-4 py-3 hover:bg-[#EBEEF0] text-gray-800 transition-colors  "
                        href="dashboard"
                    >
                        <img src="/images/Vector1.svg" alt="" />
                        Dashboard
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className= "flex gap-3 px-4 py-3 hover:bg-[#EBEEF0] text-gray-800 transition-colors"
                        href="/profile"
                    >
                        <img src="/images/Vector7.svg" alt="" />
                        Profile
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a
                        className= "flex gap-3 px-4 py-3 hover:bg-[#EBEEF0] text-gray-800 transition-colors"
                        href="/logout"
                    >
                        <img src="/images/Vector8.svg" alt="" />
                        Log out
                    </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
