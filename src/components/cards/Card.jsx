import DownloadButton from "../buttons/DownloadButton";

const Card = ({ title, description, image, link, height, width, skillsCard, contactCard, projectCard, download }) => {
    return (
        <>

            <div className={`${skillsCard ? 'flex flex-col items-center' : ""} ${contactCard ? 'flex flex-col items-center' : ""} bg-[#e4f1fe]/10 backdrop-blur-lg border border-[#e4f1fe]/30 shadow-lg rounded-2xl overflow-hidden p-4 transition hover:scale-[1.02] duration-3001`}>
                <img src={image} alt={title} className={`${skillsCard ? `w-[${width}px] h-[${height}px]` : ''} ${contactCard ? `w-[${width}px] h-[${height}px]` : ''} object-contain mb-4 rounded`} />
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                {description && (<p className="text-white/80 text-sm mb-4">{description}</p>)}


                {projectCard ? (<a href={link}
                    target="_blank" className="mt-6 px-6 py-2 text-white rounded-full bg-gradient-to-br from-[var(--eleventh-color)] via-[var(--twelfth-color)] to-[var(--thirteen-color)] transition hover:scale-[1.02] duration-300 shadow-xl text-bold">View Project</a>) : (<></>)}
                {contactCard && !download ? (<a href={link}

                    target="_blank" className="mt-6 px-3 py-2 text-white rounded-full bg-gradient-to-br from-[var(--eleventh-color)] via-[var(--twelfth-color)] to-[var(--thirteen-color)] transition hover:scale-[1.02] duration-300 shadow-xl text-bold">Let's connect</a>) : (<></>)}
                {download && <DownloadButton />}

            </div>

        </>
    );
};

export default Card;