let aj = document.querySelector('#sendRequest');
aj.addEventListener('click', sendRequest);
	
// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let geturl;
	let rs = document.querySelectorAll('input[name="kensaku"]');
	for (let r of rs) {
        if (r.checked) {
            console.log(r.value);
			geturl = r.value;
        }
	}
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+geturl+'.json';


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

	if ('input[id=city1]'.checked) {
		let ka11 = document.createElement('p');
		let ajaka11 = document.querySelector('td#11');
		ajaka11.insertAdjacentElement('afterend', ka11);
		aj.addEventListener('click',addtext11);
		function addtext11() {
			p.textcontent = [data.crrod.lon,]
		}
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