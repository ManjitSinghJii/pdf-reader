window.onload = function() {

    // Upload and read pdf
    var iframe = document.getElementById("pdf-frame");
    var input = document.getElementById("file-uploader");
    input.onchange = function() {
        var file = this.files[0];
        var url = URL.createObjectURL(file);
        iframe.src = url;


        //Show filename
        var filename = document.getElementById("filename");
        filename.innerHTML = file.name;

        //Show filesize
        var size = document.getElementById("size");
        var num = ((file.size/1000)/1000).toFixed(2);
        size.innerHTML = "Size : "+ num +"Mb";


    }

    //Download PDF
    var downloadBtn = document.getElementById("download");
    downloadBtn.onclick = function() {
        var url = iframe.src;
        var a = document.createElement("a");
        a.href = url;
        a.download = "demo.pdf";
        a.click();

        //Remove tag after downloading pdf
        a.remove();
    }


}