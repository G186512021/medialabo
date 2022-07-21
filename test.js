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



	let aja1 = document.querySelector('td#name');
	aj.addEventListener('mouseleave',addtext1);
	function addtext1() {
		aja1.textContent = [data.name,]
	}
	let aja2 = document.querySelector('td#lon');
	aj.addEventListener('mouseleave',addtext2);
	function addtext2() {
		aja2.textContent = [data.coord.lon,]
	}
	let aja3 = document.querySelector('td#lat');
	aj.addEventListener('mouseleave',addtext3);
	function addtext3() {
		aja3.textContent = [data.coord.lat,]
	}
	let aja4 = document.querySelector('td#weather');
	aj.addEventListener('mouseleave',addtext4);
	function addtext4() {
		aja4.textContent = [data.weather[0].description,]
	}
	let aja5 = document.querySelector('td#temp_min');
	aj.addEventListener('mouseleave',addtext5);
	function addtext5() {
		aja5.textContent = [data.main.temp_min,]
	}
	let aja6 = document.querySelector('td#temp_max');
	aj.addEventListener('mouseleave',addtext6);
	function addtext6() {
		aja6.textContent = [data.main.temp_max,]
	}
	let aja7 = document.querySelector('td#humidity');
	aj.addEventListener('mouseleave',addtext7);
	function addtext7() {
		aja7.textContent = [data.main.humidity,]
	}
	let aja8 = document.querySelector('td#speed');
	aj.addEventListener('mouseleave',addtext8);
	function addtext8() {
		aja8.textContent = [data.wind.speed,]
	}
	let aja9 = document.querySelector('td#deg');
	aj.addEventListener('mouseleave',addtext9);
	function addtext9() {
		aja9.textContent = [data.wind.deg,]
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