import PropTypes from 'prop-types';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaArrowDown} from 'react-icons/fa6'

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        const pdf = new jsPDF('p', 'mm', 'a4');

        pdf.setFontSize(20); // Set font size to 12 points

        html2canvas(input, { scale: 2 }, { autoPaging: true })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg');
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button className = "text-white w-fit place-self-end  p-2 rounded " onClick={downloadPdfDocument}> <FaArrowDown  className=' inline mr-1 rounded-full'/>Download Pdf</button>

}

GenericPdfDownloader.propTypes = {
    rootElementId: PropTypes.string.isRequired,
    downloadFileName: PropTypes.string.isRequired,
    
};

export default GenericPdfDownloader;
