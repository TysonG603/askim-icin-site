const DOGRU_TARIH = '2025-11-08';

document.getElementById('kontrolButonu').addEventListener('click', function() {

    const girilenTarih = document.getElementById('sevgiliTarihi').value;

    if (girilenTarih === DOGRU_TARIH) {
        document.querySelector('.container').style.display = 'none';

        document.getElementById('fotografAlbumu').style.display = 'block';
    }
})