
//--------------------------------------------------------- Theme script ----------------------------------------------------//
document.getElementById('themeSwitcher').addEventListener('click', function () {
document.body.classList.toggle('dark-mode');
document.querySelectorAll('.navbar, .dropdown-menu').forEach(function (element) {
    element.classList.toggle('dark-mode');
});
//------------------------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------- Dark mode -----------------------------------------------//
const icon = this.querySelector('i');
if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('bi-moon-stars');
    icon.classList.add('bi-moon-stars-fill');

    document.querySelectorAll('.container').forEach(function (container) {
        container.style.backgroundColor = '#121212';
        container.style.color = '#ffffff';
    });
    document.querySelectorAll('.sidebar1').forEach(function (sidebar1) {
        sidebar1.style.backgroundColor = '#292929';
        sidebar1.style.color = '#ffffff';
    });
    document.querySelectorAll('.qr').forEach(function (qr) {
        qr.style.backgroundColor = '#121212';
        qr.style.color = '#ffffff';
    });
    document.querySelectorAll('.db').forEach(function (db) {
        db.style.backgroundColor = '#121212';
        db.style.color = '#ffffff';
    });
    document.querySelectorAll('body').forEach(function (body) {
        body.style.backgroundColor = '#121212';
        body.style.color = '#ffffff';
    });
    document.querySelectorAll('td').forEach(function (td) {
        td.style.backgroundColor = '#121212';
        td.style.color = '#ffffff';
    });
    document.querySelectorAll('.container-fluid').forEach(function (containerFluid) {  
        containerFluid.style.backgroundColor = '#292929';
        containerFluid.style.color = '#ffffff';
    });
    document.querySelectorAll('.dropdown-btn').forEach(function (dropdownBtn) { 
        dropdownBtn.style.backgroundColor = '#00000000';
        dropdownBtn.style.color = '#ffffff';
    });
    document.querySelectorAll('.dropdown-item').forEach(function (dropdownItem) { 
        dropdownItem.style.backgroundColor = '#00000000';
        dropdownItem.style.color = '#ffffff';
    });
    document.querySelectorAll('.bg-body-tertiary').forEach(function (bgBodyTertiary) { 
        bgBodyTertiary.style.backgroundColor = '#000000';
        bgBodyTertiary.style.color = '#ffffff';
    });
    document.querySelectorAll('.navbar-expand-lg').forEach(function (navbarExpandLg) { 
        navbarExpandLg.style.backgroundColor = '#000000';
        navbarExpandLg.style.color = '#ffffff';
    });
    document.querySelectorAll('th').forEach(function (th) { 
        th.style.backgroundColor = '#292929';
        th.style.color = '#ffffff';
    });
    document.querySelectorAll('.button-sm').forEach(function (buttonSm) { 
        buttonSm.style.backgroundColor = '#292929';
        buttonSm.style.color = '#ffffff';
    });
    //--------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------------ Light mode -----------------------------------------------//
} else {
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-moon-stars');
    document.querySelectorAll('.container').forEach(function (container) {
        container.style.backgroundColor = '#ffffff';
        container.style.color = '#000000';
    });
    document.querySelectorAll('.sidebar1').forEach(function (sidebar1) {
        sidebar1.style.backgroundColor = '#b8b8b8';
        sidebar1.style.color = '#000000';
    });
    document.querySelectorAll('.qr').forEach(function (qr) {
        qr.style.backgroundColor = '#ffffff';
        qr.style.color = '#000000';
    });
    document.querySelectorAll('.db').forEach(function (db) {
        db.style.backgroundColor = '#ffffff';
        db.style.color = '#000000';
    });
    document.querySelectorAll('body').forEach(function (body) {
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#000000';
    });
    document.querySelectorAll('td').forEach(function (td) {
        td.style.backgroundColor = '#ffffff';
        td.style.color = '#000000';
    });
    document.querySelectorAll('.container-fluid').forEach(function (containerFluid) {  
        containerFluid.style.backgroundColor = '#ffffff';
        containerFluid.style.color = '#000000';
    });
    document.querySelectorAll('.dropdown-btn').forEach(function (dropdownBtn) { 
        dropdownBtn.style.backgroundColor = '#00000000';
        dropdownBtn.style.color = '#292929';
    });
    document.querySelectorAll('.dropdown-item').forEach(function (dropdownItem) { 
        dropdownItem.style.backgroundColor = '#00000000';
        dropdownItem.style.color = '#292929';
    });
    document.querySelectorAll('.bg-body-tertiary').forEach(function (bgBodyTertiary) { 
        bgBodyTertiary.style.backgroundColor = '#ffffff';
        bgBodyTertiary.style.color = '#000000';
    });
    document.querySelectorAll('.navbar-expand-lg').forEach(function (navbarExpandLg) { 
        navbarExpandLg.style.backgroundColor = '#ffffff';
        navbarExpandLg.style.color = '#000000';
    });
    document.querySelectorAll('th').forEach(function (th) { 
        th.style.backgroundColor = '#eeeeee';
        th.style.color = '#000000';
    });
}
});
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------- Language Script -------------------------------------------------------//
function switchLanguage(lang) {
const translations = {
'en': {
    'Senin':'Monday',
    'Selasa':'Tuesday',
    'Rabu':'Wednesday',
    'Kamis':'Thursday',
    'Jumat':'Friday',
    'Sabtu':'Saturday',
    'Minggu':'Sunday',
    'Mata Kuliah': 'Course',
    'Jam': 'Time',
    'Ruang': 'Room',
    'Jenis': 'Type',
    'Search': 'Search',
    'Dashboard': 'Dashboard',
    'Petunjuk': 'Guide',
    'E-mail': 'E-mail',
    'Mahasiswa': 'Student',
    'Profil Mahasiswa': 'Student Profile',
    'Fakultas': 'Faculty',
    'Ilmu Komputer': 'Computer Science',
    'Ekonomi dan Sosial': 'Economics and Social Sciences',
    'Sains dan Teknologi': 'Science and Technology',
    'Pascasarjana': 'Postgraduate',
    'Rekap Nilai': 'Grade Recap',
    'Tambah Data': 'Add Data',
    'Contact': 'Contact'
},
'id': {
    'Senin':'Senin',
    'Selasa':'Selasa',
    'Rabu':'Rabu',
    'Kamis':'Kamis',
    'Jumat':'Jumat',
    'Sabtu':'Sabtu',
    'Minggu':'Minggu',
    'Mata Kuliah': 'Mata Kuliah',
    'Jam': 'Jam',
    'Ruang': 'Ruang',
    'Jenis': 'Jenis',
    'Search': 'Cari',
    'Dashboard': 'Dashboard',
    'Petunjuk': 'Petunjuk',
    'E-mail': 'Email',
    'Mahasiswa': 'Mahasiswa',
    'Profil Mahasiswa': 'Profil Mahasiswa',
    'Fakultas': 'Fakultas',
    'Ilmu Komputer': 'Ilmu Komputer',
    'Ekonomi dan Sosial': 'Ekonomi dan Sosial',
    'Sains dan Teknologi': 'Sains dan Teknologi',
    'Pascasarjana': 'Pascasarjana',
    'Rekap Nilai': 'Rekap Nilai',
    'Tambah Data': 'Tambah Data',
    'Contact': 'Kontak'
}
};
const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.innerText = translations[lang][translationKey] || element.innerText;
    });

    document.getElementById('languageSwitcher').innerText = lang === 'id' ? 'en' : 'id';
}
document.getElementById('languageSwitcher').addEventListener('click', function () {
    const currentLang = document.body.classList.contains('en') ? 'en' : 'id';
    const newLang = currentLang === 'en' ? 'id' : 'en';
    switchLanguage(newLang);
    document.body.classList.toggle('id'); 
});
document.addEventListener('DOMContentLoaded', function () {
    const defaultLang = 'id';
    switchLanguage(defaultLang);
    document.body.classList.add(defaultLang); 
});
//---------------------------------------------------------------------------------------------------------------------//
        //------------------------------------------------- Tablinks ---------------------------------------------------//
function openTab(evt, tabName) {
    var i, tabcontent, cose, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    cose = document.getElementsByClassName("content-section");
    for (i = 0; i < cose.length; i++) {
        cose[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tablinks.active').click();
});
}

//--------------------------------------------------------------------------------------------------------------//


//---------------------------------------------- Form Dropdown --------------------------------------------------------//

document.getElementById('mhs').addEventListener('click', function() {
  var limhs = document.getElementById('limhs');
  limhs.style.display = limhs.style.display === 'none' || limhs.style.display === '' ? 'block' : 'none';
});

document.getElementById('appendData').addEventListener('click', function() {
  var apD = document.getElementById('apD');
  apD.style.display = apD.style.display === 'none' || apD.style.display === '' ? 'block' : 'none';
});

document.getElementById('maha').addEventListener('click', function() {
  var kontenMaha = document.getElementById('kontenMaha');
  kontenMaha.style.display = kontenMaha.style.display === 'none' || kontenMaha.style.display === '' ? 'block' : 'none';
});

document.getElementById('rekap').addEventListener('click', function() {
  var kontenNilai = document.getElementById('kontenNilai');
  kontenNilai.style.display = kontenNilai.style.display === 'none' || kontenNilai.style.display === '' ? 'block' : 'none';
});

//----------------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------Tambah data mhs-----------------------------------------------------//

//------------------------------------------Filter Mahasiswa-------------------------------------------------//
const fakultasSelect = document.getElementById('fakultasSelect');
const angkatanSelect = document.getElementById('angkatanSelect');
const prodiSelect = document.getElementById('prodiSelect');
const prodiOptions = {
  ilmuKomputer: [
    { value: 'D3TI', text: 'D3 Teknik Informatika' },
    { value: 'S1SI', text: 'S1 Sistem Informasi' },
  ],
  ekonomiSosial: [
    { value: 'S1IP', text: 'S1 Ilmu Pemerintahan' },
    { value: 'S1AK', text: 'S1 Akuntansi' },
  ],
  sainsTeknologi: [
    { value: 'S1GEO', text: 'S1 Geografi' },
    { value: 'S1ARS', text: 'S1 Arsitektur' }
  ]
};

fakultasSelect.addEventListener('change', function() {
  const selectedFakultas = fakultasSelect.value;
  angkatanSelect.value = '';
  prodiSelect.innerHTML = '<option value="">Pilih Program Studi</option>';
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  if (selectedFakultas) {
    angkatanSelect.disabled = false;
    prodiSelect.disabled = true;
    prodiSelect.innerHTML = '<option value="">Pilih Program Studi</option>';
  } else {
    angkatanSelect.disabled = true;
    prodiSelect.disabled = true;
  }
});

angkatanSelect.addEventListener('change', function() {
  const selectedAngkatan = angkatanSelect.value;
  const selectedFakultas = fakultasSelect.value;
  prodiSelect.innerHTML = '<option value="">Pilih Program Studi</option>';

  if (selectedAngkatan && selectedFakultas) {
    prodiSelect.disabled = false;
    prodiOptions[selectedFakultas].forEach(option => {
      const newOption = document.createElement('option');
      newOption.value = option.value;
      newOption.text = option.text;
      prodiSelect.appendChild(newOption);
    });
  } else {
    prodiSelect.disabled = true;
  }
});

prodiSelect.addEventListener('change', function() {
  const selectedProdi = prodiSelect.value;
  const selectedFakultas = fakultasSelect.value;
  const selectedAngkatan = angkatanSelect.value;

  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  if (selectedProdi && selectedFakultas && selectedAngkatan) {
    const contentSectionId = `${selectedFakultas}${selectedAngkatan}${selectedProdi}`;
    document.getElementById(contentSectionId).style.display = 'block';
  }
});

//------------------------------------------Rekap Nilai-------------------------------------------------------//
const fakultasSelectRekap = document.getElementById('fakultasSelect2');
const angkatanSelectRekap = document.getElementById('angkatanSelect2');
const prodiSelectRekap = document.getElementById('prodiSelect2');
const prodiOptionsRekap = {
  ilmuKomputer: [
    { value: 'D3TIrekap', text: 'D3 Teknik Informatika' },
    { value: 'S1SIrekap', text: 'S1 Sistem Informasi' },
  ],
  ekonomiSosial: [
    { value: 'S1IPrekap', text: 'S1 Ilmu Pemerintahan' },
    { value: 'S1AKrekap', text: 'S1 Akuntansi' },
  ],
  sainsTeknologi: [
    { value: 'S1GEOrekap', text: 'S1 Geografi' },
    { value: 'S1ARSrekap', text: 'S1 Arsitektur' }
  ]
};

fakultasSelectRekap.addEventListener('change', function() {
  const selectedFakultasRekap = fakultasSelectRekap.value;
  angkatanSelectRekap.value = '';
  prodiSelectRekap.innerHTML = '<option value="">Pilih Program Studi</option>';
  document.querySelectorAll('.content-section-rekap').forEach(section => {
    section.style.display = 'none';
  });

  if (selectedFakultasRekap) {
    angkatanSelectRekap.disabled = false;
    prodiSelectRekap.disabled = true;
    prodiSelectRekap.innerHTML = '<option value="">Pilih Program Studi</option>';
  } else {
    angkatanSelectRekap.disabled = true;
    prodiSelectRekap.disabled = true;
  }
});

angkatanSelectRekap.addEventListener('change', function() {
  const selectedAngkatanRekap = angkatanSelectRekap.value;
  const selectedFakultasRekap = fakultasSelectRekap.value;
  prodiSelectRekap.innerHTML = '<option value="">Pilih Program Studi</option>';

  if (selectedAngkatanRekap && selectedFakultasRekap) {
    prodiSelectRekap.disabled = false;
    prodiOptionsRekap[selectedFakultasRekap].forEach(option => {
      const newOptionRekap = document.createElement('option');
      newOptionRekap.value = option.value;
      newOptionRekap.text = option.text;
      prodiSelectRekap.appendChild(newOptionRekap);
    });
  } else {
    prodiSelectRekap.disabled = true;
  }
});

prodiSelectRekap.addEventListener('change', function() {
  const selectedProdiRekap = prodiSelectRekap.value;
  const selectedFakultasRekap = fakultasSelectRekap.value;
  const selectedAngkatanRekap = angkatanSelectRekap.value;

  document.querySelectorAll('.content-section-rekap').forEach(section => {
    section.style.display = 'none';
  });

  if (selectedProdiRekap && selectedFakultasRekap && selectedAngkatanRekap) {
    const contentSectionIdRekap = `${selectedFakultasRekap}${selectedAngkatanRekap}${selectedProdiRekap}`;
    document.getElementById(contentSectionIdRekap).style.display = 'block';
  }
});

//-----------------------------------------------------------------------------------------------------------//


//----------------------------------------------Responsively arrow----------------------------------------------------------------//
document.getElementById('mhs').addEventListener('click', function() {
  var up1 = document.getElementById('up1');
  var down1 = document.getElementById('down1');
  if (up1.style.display === 'none') {
  up1.style.display = 'block';
  down1.style.display = 'none';
  } else {
  up1.style.display = 'none';
  down1.style.display = 'block';
  }
});

document.getElementById('maha').addEventListener('click', function() {
  var up2 = document.getElementById('up2');
  var down2 = document.getElementById('down2');
  if (up2.style.display == 'none') {
    up2.style.display = 'block';
    down2.style.display = 'none';
  } else {
    up2.style.display = 'none';
    down2.style.display = 'block';
  }
});

document.getElementById('rekap').addEventListener('click', function() {
  var up3 = document.getElementById('up3');
  var down3 = document.getElementById('down3');
  if (up3.style.display == 'none') {
    up3.style.display = 'block';
    down3.style.display = 'none';
  } else {
    up3.style.display = 'none';
    down3.style.display = 'block';
  }
});
//-------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------Edit mhs-----------------------------------------------------//
function editMahasiswa(id) {
    var row = document.getElementById(id);
    var nama = row.cells[2].textContent;
    var uas = document.getElementById('uas' + id).textContent;
    var uts = document.getElementById('uts' + id).textContent;
    var presensi = document.getElementById('presensi' + id).textContent;
    var keaktifan = document.getElementById('keaktifan' + id).textContent;

    document.getElementById('editId').value = id;
    document.getElementById('editUAS').value = uas;
    document.getElementById('editUTS').value = uts;
    document.getElementById('editPresensi').value = presensi;
    document.getElementById('editKeaktifan').value = keaktifan;

    var modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var id = document.getElementById('editId').value;
    var uas = document.getElementById('editUAS').value;
    var uts = document.getElementById('editUTS').value;
    var presensi = document.getElementById('editPresensi').value;
    var keaktifan = document.getElementById('editKeaktifan').value;

    document.getElementById('uas' + id).textContent = uas;
    document.getElementById('uts' + id).textContent = uts;
    document.getElementById('presensi' + id).textContent = presensi;
    document.getElementById('keaktifan' + id).textContent = keaktifan;

    var modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
});


//-------------------------------------------------------------------------------------------------------------------//

