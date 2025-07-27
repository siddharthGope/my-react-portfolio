import React, { useContext } from 'react'
import DownloadFileContext from '../../utilities/usedownloadPdf';

function DownloadButton() {
    const downloadFile = useContext(DownloadFileContext);

    const handleDownload = () => {
        downloadFile('Siddharth gope.pdf')
    }
    return (
        <div>
            <button onClick={handleDownload}
                target="_blank" className="mt-6 px-3 py-2 text-white rounded-full bg-gradient-to-br from-[var(--eleventh-color)] via-[var(--twelfth-color)] to-[var(--thirteen-color)] transition hover:scale-[1.02] duration-300 shadow-xl text-bold">Download CV</button>

        </div>
    )
}

export default DownloadButton