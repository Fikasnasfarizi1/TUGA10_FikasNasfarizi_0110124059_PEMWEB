function displayBisonImage() {
    const selectedOption = document.getElementById("bison-select").value;
    const imageContainer = document.getElementById("image-container");

    if (!selectedOption) {
        imageContainer.innerHTML = '';
        return;
    }

    const imgElement = document.createElement("img");
    imgElement.src = selectedOption;
    imgElement.alt = selectedOption;

    imageContainer.innerHTML = ''; 
    imageContainer.appendChild(imgElement);

    alert("Nama file gambar: " + selectedOption);
}
