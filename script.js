// ========================================
// 1. DOĞRU TARİH VE SAYFA GEÇİŞİ KONTROLÜ
// ========================================

// 🚨 ZORUNLU DÜZENLEME: LÜTFEN AŞAĞIDAKİ TARİHİ KENDİ SEVGİLİ OLMA TARİHİNİZLE DEĞİŞTİRİN (YYYY-AA-GG formatında)
const DOGRU_TARIH = '2025-11-08'; 

document.getElementById('kontrolButonu').addEventListener('click', function() {
    const girilenTarih = document.getElementById('sevgiliTarihi').value;
    
    if (girilenTarih === DOGRU_TARIH) {
        // Giriş ekranını (container) gizle
        document.querySelector('.container').style.display = 'none';
        
        // Fotoğraf albümünü (fotografAlbumu) hazırlama ve Fade-In animasyonu uygulama
        const fotografAlbumu = document.getElementById('fotografAlbumu');
        fotografAlbumu.style.opacity = '0'; // Albümü önce tamamen şeffaf yap
        fotografAlbumu.style.display = 'block'; // Görünür yap (ama şeffaf)
        
        // Kısa bir gecikme sonrası animasyonu başlat (CSS'teki fade-in)
        setTimeout(() => {
            // CSS'teki animasyonu başlat
            fotografAlbumu.style.animation = 'fade-in 1s ease-out forwards'; 
        }, 50); 
        
        alert('Tebrikler! Kalbimin anahtarını doğru bildin. Şimdi anılarımıza bakıyoruz! 💖');
    } else {
        alert('Hata! Yanlış tarih. Lütfen doğru tarihi hatırla.');
    }
});


// ========================================
// 2. TELEFONA UYUMLU DOKUNMA/FARE İZİ ANİMASYONU
// ========================================

// Kalp/Çiçek elementi oluşturma fonksiyonu
function kalpEkle(x, y) {
    const kalp = document.createElement('span');
    kalp.classList.add('imlec-kalbi');
    
    // Konumu ayarla (CSS'teki 'position: absolute' için)
    kalp.style.left = x + 'px';
    kalp.style.top = y + 'px';
    
    document.body.appendChild(kalp);
    
    // 1 saniye sonra kalbi yavaşça kaldır
    setTimeout(() => {
        kalp.remove();
    }, 1000);
}

// 1. FARE HAREKETİ (Masaüstü için)
document.addEventListener('mousemove', function(e) {
    kalpEkle(e.pageX, e.pageY);
});

// 2. DOKUNMA HAREKETİ (Telefon/Tablet için)
document.addEventListener('touchmove', function(e) {
    // Sadece tek parmak dokunuşunu takip et
    const touch = e.touches[0];
    kalpEkle(touch.pageX, touch.pageY);
});
