axios.get('http://localhost/healthnet/healthnet-backend/print_invoice.php')
    .then(response => {
        const pdfBase64 = response.data.pdf_base64;
        const link = document.createElement('a');
        link.href = 'data:application/pdf;base64,' + pdfBase64;
        link.download = 'invoice.pdf';
        link.click();
    })
    .catch(error => {
        console.error(error);
    });






    