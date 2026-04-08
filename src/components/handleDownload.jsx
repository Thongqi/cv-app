import DownloadIcon from "@mui/icons-material/Download";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function Download() {
  async function handleDownlaod() {
    window.print();
  }

  return (
    <button onClick={handleDownlaod} class="download">
      <DownloadIcon></DownloadIcon>
    </button>
  );
}
