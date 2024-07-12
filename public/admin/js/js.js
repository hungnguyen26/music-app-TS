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

}
// end preview upload ảnh

// preview upload audio
const uploadAudio= document.querySelector("[upload-audio]");
if (uploadAudio) {
  const uploadAudioInput = uploadAudio.querySelector("[upload-audio-input]");
  const uploadAudioPlay = uploadAudio.querySelector("[upload-audio-play]");
  const source = uploadAudioPlay.querySelector("source");
  console.log(source);
  uploadAudioInput.addEventListener("change", (event) => {
    if (event.target.files.length) {

      source.src = URL.createObjectURL(event.target.files[0]);
      uploadAudioPlay.load();
    }
  });

}
// end preview upload audio