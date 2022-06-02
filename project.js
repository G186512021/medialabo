let aj = document.querySelector('#sendRequest');
aj.addEventListener('click', sendRequest);

// 通信開始処理
let k = document.querySelector('Kairo');
Kairo = k.value;
function sendRequest() {
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+Kairo+'.json';

  //通信開始
  axios.get(url)
   .then(showResult)
   .catch(showError)
   .then(finish);
}

//成功処理
function showResult(resp) {

  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'String') {
    data = JSON.parse(data);
  }
}

// dataを出力
p.textContent = [data]
// 通信エラーが発生した時の処理
function showError(err) {
console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
console.log('Ajax 通信が終わりました');
}
