import { createContext } from "react";

const DownloadFileContext = createContext()

export const DownloadFileProvider = ({ children }) => {

    const downloadFile = (fileURL) => {
        const link = document.createElement("a")
        link.href = fileURL
        link.download = "Siddharth-Gope-CV.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <DownloadFileContext.Provider value={downloadFile}>
            {children}
        </DownloadFileContext.Provider>
    )


}

export default DownloadFileContext;

