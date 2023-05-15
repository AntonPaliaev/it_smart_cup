//проверка поддержки webp,
//добавление класса webp или nowebp для HTML
export function isWebp() {
  //проверка поддержки webp
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp,base64"
  }
  //добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'no-webp' : 'webp';
    document.documentElement.classList.add(className);
  });
}