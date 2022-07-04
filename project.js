

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



	let c1 = document.querySelector('#cell1');
	c1.addEventListener('click', function() {
		c1.textContent = [data.coord.lon,]
	});
	let c2 = document.querySelector('#cell2');
	c2.addEventListener('click', function() {
		c2.textContent = [data.coord.lat,]
	});
	let c3 = document.querySelector('#cell3');
	c3.addEventListener('click', function() {
		this.textContent = [data.weather[0].description,]
	});
	let c4 = document.querySelector('#cell4');
	c4.addEventListener('click', function() {
		this.textContent = [data.main.temp_min,]
	});
	let c5 = document.querySelector('#cell5');
	c5.addEventListener('click', function() {
		this.textContent = [data.main.temp_max,]
	});
	let c6 = document.querySelector('#cell6');
	c6.addEventListener('click', function() {
		this.textContent = [data.main.humidity,]
	});
	let c7 = document.querySelector('#cell7');
	c7.addEventListener('click', function() {
		this.textContent = [data.wind.speed,]
	});
	let c8 = document.querySelector('#cell8');
	c8.addEventListener('click', function() {
		this.textContent = [data.wind.deg,]
	});
	let c9 = document.querySelector('#cell9');
	c9.addEventListener('click', function() {
		this.textContent = [data.name,]
	});
	
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

