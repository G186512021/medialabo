let aj = document.querySelector('#sendRequest');
aj.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
	// URL を設定
    Kairo = '360630';
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+Kairo+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);

}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}


    let p;
    p = document.createElement('p');

	let a = document.querySelectorAll('input[name="kensaku"]');
	let aja = document.querySelector('div#placeholder');
	aja.insertAdjacentElement('afterend', p);

	if ('id#lon' = true) {
		placeholder.textContent = data.coord.lon;
	}
	
	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
