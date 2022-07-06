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
	let aja = document.querySelector('div#placeholder');
	aja.insertAdjacentElement('afterend', p);

	let tex1 = document.querySelector('id#lon');
	tex1.addEventListener('click',addtext1);
	function addtext1() {
		p.textContent = [data.coord.lon,]
	}

	let tex2 = document.querySelector('id#lat');
	tex2.addEventListener('click',addtext2);
	function addtext2() {
		p.textContent = [data.coord.lat,]
	}

	let tex3 = document.querySelector('id#weather');
	tex3.addEventListener('click',addtext3);
	function addtext3() {
		p.textContent = [data.weather[0].description,]
	}

	let tex4 = document.querySelector('id#temp_min');
	tex4.addEventListener('click',addtext4);
	function addtext4() {
		p.textContent = [data.main.temp_min,]
	}

	let tex5 = document.querySelector('id#temp_max');
	tex5.addEventListener('click',addtext5);
	function addtext5() {
		p.textContent = [data.main.temp_max,]
	}

	let tex6 = document.querySelector('id#humidity');
	tex6.addEventListener('click',addtext6);
	function addtext6() {
		p.textContent = [data.main.humidity,]
	}

	let tex7 = document.querySelector('id#speed');
	tex7.addEventListener('click',addtext7);
	function addtext7() {
		p.textContent = [data.wind.speed,]
	}

	let tex8 = document.querySelector('id#deg');
	tex8.addEventListener('click',addtext8);
	function addtext8() {
		p.textContent = [data.wind.deg,]
	}

	let tex9 = document.querySelector('id#name');
	tex9.addEventListener('click',addtext9);
	function addtext9() {
		p.textContent = [data.name,]
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
