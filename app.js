function func(){
    var x = document.getElementById("input").value;
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${x}`;

    var img = document.getElementById("img");
    var generatedText = document.getElementById('successText');
    generatedText.classList.remove("hide")
    img.src = url;
    generatedText.innerHTML = "Generated successfully!";
    console.log(url);
  }