document.addEventListener("DOMContentLoaded", function () {
  const inputString = document.getElementById("inputString");
  const result = document.getElementById("result");
  const copyButton = document.getElementById("copyButton");

  inputString.addEventListener("input", convertAndDisplay);
  copyButton.addEventListener("click", copyToClipboard);

  function vn_to_str(str) {
    const unicode = {
      a: "á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ",
      d: "đ",
      e: "é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ",
      i: "í|ì|ỉ|ĩ|ị",
      o: "ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ",
      u: "ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự",
      y: "ý|ỳ|ỷ|ỹ|ỵ",
      A: "Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ",
      D: "Đ",
      E: "É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ",
      I: "Í|Ì|Ỉ|Ĩ|Ị",
      O: "Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ",
      U: "Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự",
      Y: "Ý|Ỳ|Ỷ|Ỹ|Ỵ",
    };
    for (const nonUnicode in unicode) {
      const pattern = new RegExp(`(${unicode[nonUnicode]})`, "gi");
      str = str.replace(pattern, nonUnicode);
    }
    str = str
      .trim()
      .replace(/ /g, "-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");
    return str;
  }

  function convertAndDisplay() {
    const friendlyURL = vn_to_str(inputString.value);
    result.textContent = friendlyURL;
  }

  function copyToClipboard() {
    const inputText = result.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = inputText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showCopySuccess();
  }

  function showCopySuccess() {
    copyButton.innerHTML = '<i class="fas fa-check me-2"></i> Copied';
    copyButton.classList.add("copied");
    setTimeout(() => {
      copyButton.innerHTML = '<i class="fas fa-copy me-2"></i> Copy';
      copyButton.classList.remove("copied");
    }, 1000);
  }
});
