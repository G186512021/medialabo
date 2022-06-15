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

	let a1 = document.querySelector('input[name="kensaku1"]');
	let aja1 = document.querySelector('div#placeholder1');
	aja1.insertAdjacentElement('afterend', p);
	for (let b of a1) {
		if (b.checked) {
			console.log(b.value);
			p.textContent = [
				data.coord.lon,
				data.coord.lat,
				data.weather[0].description,
				data.main.temp_min,
				data.main.temp_max,
				data.main.humidity,
				data.wind.speed,
				data.wind.deg,
				data.name,
			]
		}
	}
	let a2 = document.querySelector('input[name="kensaku2"]');
	let aja2 = document.querySelector('div#placeholder2');
	aja2.insertAdjacentElement('afterend', p);
	for (let b of a2) {
		if (b.checked) {
			console.log(b.value);
			p.textContent = [
				data.coord.lat,
			]
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


