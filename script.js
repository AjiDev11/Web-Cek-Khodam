const nameInput = document.getElementById('name');

function checkKhodam(event) {
    event.preventDefault();

    const cekButton = document.getElementById('cekButton');
    const result = document.getElementById('result');

    if (nameInput.value.length < 3) {
        cekButton.textContent = 'Lu yakin itu namanya udah bener?';
    } else {
        cekButton.textContent = '✨ Sedang memeriksa khodam ...';
        const khodamCoy = khodamCuy(nameInput.value.trim());
        const ihir = nameInput.value.toLowerCase() === 'rian';
        const riyan = nameInput.value.toLowerCase() === 'riyan';
        console.log(ihir);
        
        setTimeout(() => {
            if (ihir) {
                result.textContent = `Hallo ${nameInput.value} khodam-mu Adalah Badut Jawa`;
            } else if (riyan) {
                result.textContent = `Hallo ${nameInput.value} khodam-mu Adalah Buaya Darat`;
            } else {
                result.textContent = `Hallo ${nameInput.value} khodam-mu Adalah ${khodamCoy}`;
            }
            cekButton.textContent = '✨ Cek';
        }, 1000);
    }
}

const khodam = [
    'Suster Ngent',
    'Elang Hitam',
    'Kacang Polong',
    'Bebek Semok',
    'Orangutan Kerdil',
    'ChaChing Ma',
    'Babi Hutan',
    'Badak Hitam',
    'Cacing Tanah',
    'Galon Le Mineral',
    'Bakwan Goreng',
    'Gaada',
    'Sapi Belia',
    'Kucing Garong',
    'Sosok Tunggu Kiris',
    'Harimau Garang',
    'Ular Sawah',
    'Monyet',
    'Kont Satu',
    'Nippon Paint',
    'Semen Gresik',
    'Banteng Merah',
    'Rucika',
    'Biawak Jawa',
    'Rohingnya',
];

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const khodamCuy = (namamu) => {
    const hash = Math.abs(hashString(namamu));
    return khodam[hash % khodam.length];
};
