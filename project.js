
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

	window.onload = function () {
		document.getElementByld("lon").onclick = lonhander;
		document.getElementByld("lat").onclick = lathander;
		document.getElementByld("weather").onclick = weatherhander;
		document.getElementByld("temp_min").onclick = temp_minhander;
		document.getElementByld("temp_max").onclick = temp_maxhander;
		document.getElementByld("humidity").onclick = humidityhander;
		document.getElementByld("speed").onclick = speedhander;
		document.getElementByld("deg").onclick = deghander;
		document.getElementByld("name").onclick = namehander;
	}

	function lonhander(e) {
		document.getElementById("status").textcontent = data.coord.lon
	}
	function lathander(e) {
		document.getElementById("status").textcontent = data.coord.lat
	}
	function weatherhander(e) {
		document.getElementById("status").textcontent = data.weather[0].description
	}
	function temp_minhander(e) {
		document.getElementById("status").textcontent = data.main.temp_min
	}
	function temp_maxhander(e) {
		document.getElementById("status").textcontent = data.main.temp_max
	}
	function humidityhander(e) {
		document.getElementById("status").textcontent = data.main.humidity
	}
	function speedhander(e) {
		document.getElementById("status").textcontent = data.wind.speed
	}
	function deghander(e) {
		document.getElementById("status").textcontent = data.wind.deg
	}
	function namehander(e) {
		document.getElementById("status").textcontent = data.name
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


