document.getElementById('descargarPDF').addEventListener('click', function () {
    const elementoParaConvertir = document.getElementById('cv');

    // Configuraciones del PDF
    const opciones = {
        margin:       10,
        filename:     'CV_Irwin_Quispe.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Ejecutar la conversión
    html2pdf().set(opciones).from(elementoParaConvertir).save();
});