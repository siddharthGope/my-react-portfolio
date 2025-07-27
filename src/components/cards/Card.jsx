const Card = ({ title, description, image, link, height, width }) => {
    return (
        <>

            <div className="bg-[#e4f1fe]/10 backdrop-blur-lg border border-[#e4f1fe]/30 shadow-lg rounded-2xl overflow-hidden p-4 transition hover:scale-[1.02] duration-300">
                <div className="card-image-wrap">
                    <img src={`src/assets/${image}`} alt={title} className={`w-[${width}] h-[${height}] object-contain mb-4 card-image`} />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                {description && (<p className="text-white/80 text-sm mb-4">{description}</p>)}
                {/* <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full hover:bg-white/30 transition"
                >
                    View Project
                </a> */}

                {description && (<a href={link}
                    target="_blank" className="inline-block border border-white/30 px-4 py-2 rounded-full bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#1FA2FF] transition hover:scale-[1.02] duration-300">View Project</a>)}

            </div>

        </>
    );
};

export default Card;