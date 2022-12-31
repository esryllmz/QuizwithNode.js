function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

get_soru_cek = () => {
    let sorular = []
    let request = new XMLHttpRequest();
    request.open('GET', encodeURI('http://localhost:3001/get_soru'));
    request.onload = function() {
        let json = JSON.parse(request.response)

        for (let i = 0; i < json.length; i++) {
            sorular.push(new Soru(json[i].soru, {a: json[i].a_secenek, b: json[i].b_secenek, c: json[i].c_secenek, d: json[i].d_secenek}, json[i].dogru_secenek.toString().toLowerCase()))
        }
    };
    request.send();

    return sorular
}
