const DOGRU_TARIH = '2025-11-08';

document.getElementById('kontrolButonu').addEventListener('click', function() {

    const girilenTarih = document.getElementById('sevgiliTarihi').value;

    if (girilenTarih === DOGRU_TARIH) {
        document.querySelector('.container').style.display = 'none';

        document.getElementById('fotografAlbumu').style.display = 'block';
    }

})

function kalpEkle(x, y) {
    const kalp = document.createElement('span');
    kalp.classList.add('imlec-kalbi');
    
    // Konumu ayarla
    kalp.style.left = x + 'px';
    kalp.style.top = y + 'px';
    
    document.body.appendChild(kalp);
    
    // 1 saniye sonra kalbi kaldır
    setTimeout(() => {
        kalp.remove();
    }, 1000);
}
