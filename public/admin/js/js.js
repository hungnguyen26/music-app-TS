// preview upload ảnh
const uploadImg = document.querySelector("[upload-img]");
if (uploadImg) {
  const uploadImgInput = document.querySelector("[upload-img-input]");
  const uploadImgpreview = document.querySelector("[upload-img-preview]");

  uploadImgInput.addEventListener("change", (event) => {
    console.log(event);

    const file = event.target.files[0];
    if (file) {
      uploadImgpreview.src = URL.createObjectURL(file);
    }
  });

  const deleteImg = document.querySelector(".delete-img");

  deleteImg.addEventListener("click", () => {
    uploadImgInput.value = "";
    uploadImgpreview.src = "";
  });
}
// end preview upload ảnh