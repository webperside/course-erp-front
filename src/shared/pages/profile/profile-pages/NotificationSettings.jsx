import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export default function NotificationSettings() {
    const [activeStates, setActiveStates] = useState([false, true, false]);

    const toggleActive = (index) => {
        const newActiveStates = [...activeStates];
        newActiveStates[index] = !newActiveStates[index];
        setActiveStates(newActiveStates);
    };

    const sections = [
        {
            title: "Education",
            content: "You will receive information about our webinars and Academy opportunities."
        },
        {
            title: "Digest",
            content: "You will receive a seliction of our top-rated articles,challenges webinars and the most important product and industry news."
        },
        {
            title: "Product news",
            content: "You will receive information concerning product usage, feature updates, price promos, and product suveys."
        },
        {
            title: "Events",
            content: "You will receive invitations to our offline events coming soon in your area."
        },
        {
            title: "Industry news",
            content: "You will receive summaries of our research, expert surveys, and partner promos."
        }
    ];

    return (
        <section className="py-10 flex flex-col mx-auto">
            {sections.map((section, index) => (
                <div key={index} className="flex gap-3 px-3 max-w-[600px]">
                    <div >
                        <FontAwesomeIcon
                            onClick={() => toggleActive(index)}
                            className={`text-[30px] cursor-pointer ${activeStates[index] ? 'text-[#0EB05C] transition-transform scale-110 delay-150' : 'text-[#969696] transition-transform scale-100'}`}
                            icon={activeStates[index] ? faToggleOn : faToggleOff}
                        />
                    </div>
                    <div className="flex flex-col gap-2 pt-1 pb-4 select-none">
                        <h3 style={{ color: activeStates[index] ? "#181819" : "#969696" }}>{section.title}</h3>
                        <p className="text-[#969696]">{section.content}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
