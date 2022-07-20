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



    let p1 = document.createElement('p');
	let aja1 = document.querySelector('td#name');
	aja1.insertAdjacentElement('beforeend', p1);
	aj.addEventListener('mouseleave',addtext1);
	function addtext1() {
		p1.textContent = [data.name,]
	}
	let p2 = document.createElement('p');
	let aja2 = document.querySelector('td#11');
	aja2.insertAdjacentElement('beforeend', p2);
	aj.addEventListener('mouseleave',addtext2);
	function addtext2() {
		p2.textContent = [data.coord.lon,]
	}
	let p3 = document.createElement('p');
	let aja3 = document.querySelector('td#12');
	aja3.insertAdjacentElement('beforeend', p3);
	aj.addEventListener('mouseleave',addtext3);
	function addtext3() {
		p3.textContent = [data.coord.lat,]
	}
	let p4 = document.createElement('p');
	let aja4 = document.querySelector('td#13');
	aja4.insertAdjacentElement('beforeend', p4);
	aj.addEventListener('mouseleave',addtext4);
	function addtext4() {
		p4.textContent = [data.weather[0].description,]
	}
	let p5 = document.createElement('p');
	let aja5 = document.querySelector('td#14');
	aja5.insertAdjacentElement('beforeend', p5);
	aj.addEventListener('mouseleave',addtext5);
	function addtext5() {
		p5.textContent = [data.main.temp_min,]
	}
	let p6 = document.createElement('p');
	let aja6 = document.querySelector('td#15');
	aja6.insertAdjacentElement('beforeend', p6);
	aj.addEventListener('mouseleave',addtext6);
	function addtext6() {
		p6.textContent = [data.main.temp_max,]
	}
	let p7 = document.createElement('p');
	let aja7 = document.querySelector('td#16');
	aja7.insertAdjacentElement('beforeend', p7);
	aj.addEventListener('mouseleave',addtext7);
	function addtext7() {
		p7.textContent = [data.main.humidity,]
	}
	let p8 = document.createElement('p');
	let aja8 = document.querySelector('td#17');
	aja8.insertAdjacentElement('beforeend', p8);
	aj.addEventListener('mouseleave',addtext8);
	function addtext8() {
		p8.textContent = [data.wind.speed,]
	}
	let p9 = document.createElement('p');
	let aja9 = document.querySelector('td#18');
	aja9.insertAdjacentElement('beforeend', p9);
	aj.addEventListener('mouseleave',addtext9);
	function addtext9() {
		p9.textContent = [data.wind.deg,]
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