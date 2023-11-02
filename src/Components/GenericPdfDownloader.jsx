
import PropTypes from 'prop-types';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input, { scale: 5 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'JPEG', 10, 10, 190, 100);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>

}

GenericPdfDownloader.propTypes = {
    rootElementId: PropTypes.number.isRequired, // Change the prop type to number if it's an integer
    downloadFileName: PropTypes.string.isRequired,
    
};

export default GenericPdfDownloader;

