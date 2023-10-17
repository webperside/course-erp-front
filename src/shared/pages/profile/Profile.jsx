import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faGear, faHouseChimney, faRightFromBracket, faShare, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faCoffee,faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom"
import { useAppContext } from "../../components/context/AppContext";

export default function Profile() {
    const { userData } = useAppContext();
    const { username } = userData;
    const firstLetter = username ? username.charAt(0) : "";

    return (
        <section className="w-full h-auto bg-[#EBEEF0] p-6">
            <div className="max-w-[1180px] max-h-screen flex flex-col mx-auto bg-white rounded-lg shadow-md outline-none">
                <div className="flex flex-left gap-2 px-6 py-4 shadow-sm items-center ">
                    <div className="user-avatar">{firstLetter}</div>
                    <h1 className="font-bold text-[20px]">Profile</h1>
                </div>
                <div className="flex">
                    <div className="w-[264px] shadow-md px-3 py-4 text-[12px] text-[#969696] rounded-l-lg">
                        <div className="mb-2">
                            <h1 className="pb-1 px-3">SALAM, {username} </h1>
                            <div>
                                <Link to="/profile/panel" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                    <FontAwesomeIcon width={16} height={16} icon={faHouseChimney} />
                                    Panel
                                </Link>
                                <div className="border-b-2"></div>
                                <Link to="/my-page" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                <FontAwesomeIcon width={16} height={16} icon={faUser} />
                                    My Page
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h1 className="pb-1 px-3">I WON</h1>
                            <div>
                                <Link to="/coffee-posts" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                    <FontAwesomeIcon className="text-[16px]" icon={faCoffee} />
                                    Coffee Posts
                                </Link>
                                <div className="border-b-2"></div>
                                <Link to="/qr-code" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                <FontAwesomeIcon className="text-[16px]" icon={faQrcode} />
                                    Qr Code
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h1 className="pb-1 px-3">BLOG</h1>
                            <div>
                                <Link to="/my-articles" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                    <FontAwesomeIcon className="text-[16px]" icon={faShare} />
                                    My Articles
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h1 className="pb-1 px-3">PAYMENTS</h1>
                            <div>
                                <Link to="/donation-encashment" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                    <FontAwesomeIcon className="text-[16px]" icon={faWallet} />
                                    Donation Encashment
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="pb-1 px-3">SETTİNGS</h1>
                            <div>
                                <Link to="profile-settings" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                    <FontAwesomeIcon className="text-[16px]" icon={faGear} />
                                    Profile Settings
                                </Link>
                                <div className="border-b-2"></div>
                                <Link to="/exit" className="py-3 px-3 w-full flex gap-3 items-center rounded hover:bg-[#EBEEF0] transition-colors font-medium text-[#181616]">
                                <FontAwesomeIcon className="text-[16px]" icon={faRightFromBracket} />
                                    Exit
                                </Link>
                            </div>
                        </div>
                    </div> 
                    <div className="w-full h-auto flex justify-center p-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
}
