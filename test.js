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

	let p;
    p = document.createElement('p');
	let aja = document.querySelector('div#placeholder');
	aja.insertAdjacentElement('afterend', p);

	let tex = document.querySelector('input[name="kensaku"]');
	tex.addEventListener('click',addtext);
	function addtext() {
		p.textContent = [data.coord.lon,
			data.coord.lat,
			data.weather[0].description,
			data.main.temp_min,
			data.main.temp_max,
			data.main.humidity,
			data.wind.speed,
			data.wind.deg,
			data.name,]
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