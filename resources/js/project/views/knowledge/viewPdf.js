import React, { useState } from "react";
import { Document, Page } from "react-pdf";
const ViewPdf = ({ match }) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const pdf = match.params.pdf;

    return (
        <Document
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
    );
};
export default ViewPdf;
