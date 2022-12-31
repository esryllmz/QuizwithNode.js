  function Quiz() {
    this.sorular = get_soru_cek();
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}
