let aj = document.querySelector('#sendRequest');
aj.addEventListener('onLoad', sendRequest);

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

let se = document.querySelector('#search');
se.addEventListener('click', search);

let p;
p = document.createElement('p');


function search() {
	let a = document.querySelectorAll('input[name="kensaku"]');
	let aja = document.querySelector('div#placeholder');
	aja.insertAdjacentElement('afterend', p);
	for (let b of a) {
		if (b.checked) {
			console.log(b.value);
			p.textContent = [
				'url'+b.value,,
			]

		}
	}
}

/*
			p.textContent = [
				data.coord.lon,
				data.coord.lat,
				data.weather.description,
				data.main.temp_min,
				data.main.temp_max,
				data.main.humidity,
				data.wind.speed,
				data.wind.deg,
				data.name,
			]
			'data.'+b.value,
			*/

