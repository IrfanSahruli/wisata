//Fungsi Tombol Menu Navbar
const toggleButton = document.getElementById('toggle-button');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//Fungsi Read More atau Lihat Lainnya 
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll('.btn-lihat-semua');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (btn.id === 'readMoreBtnDestinasi') {
                document.querySelectorAll('.destinasi-card.hidden').forEach(card => {
                    card.classList.remove('hidden');
                });
            } else if (btn.id === 'readMoreBtnPaket') {
                document.querySelectorAll('.paket-card.hidden').forEach(card => {
                    card.classList.remove('hidden');
                });
            } else if (btn.id === 'readMoreBtnGaleri') {
                document.querySelectorAll('.galeri-card.hidden').forEach(card => {
                    card.classList.remove('hidden');
                });
            }

            btn.style.display = 'none';
        });
    });
});


//Fungsi untuk Detail Destinasi
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const destinasiData = {
        pantaiTanjungKarang: {
            nama: "Pantai Tanjung Karang",
            gambar: "./assets/TanjungKarang.jpg",
            deskripsi: "Pantai Tanjung Karang adalah salah satu destinasi wisata bahari unggulan di Donggala, Sulawesi Tengah. Pantai ini memiliki hamparan pasir putih yang lembut dan air laut yang sangat jernih, menjadikannya tempat ideal untuk bersantai dan melepaskan penat dari hiruk pikuk kota. Dengan pemandangan bawah laut yang kaya akan terumbu karang dan ikan-ikan berwarna-warni, pantai ini juga sangat populer di kalangan penyelam dan pecinta snorkeling. Suasana yang tenang dan panorama matahari terbenam yang memukau menjadikan pengalaman wisata di Pantai Tanjung Karang begitu berkesan dan menenangkan.",
            lokasi: "Donggala, Sulawesi Tengah",
            durasi: "1-2 hari",
            aktivitas: "Snorkeling, Diving, Bersantai di pantai"
        },
        pusentasi: {
            nama: "Pusentasi",
            gambar: "./assets/pusentasi.JPG",
            deskripsi: "Pusentasi, atau yang berarti 'pusat laut', adalah sebuah fenomena alam langka yang hanya dapat ditemukan di Donggala, Sulawesi Tengah. Tempat ini merupakan sebuah lubang alami besar berisi air laut yang secara unik muncul dari dasar tanah, dan bukan dari laut terbuka. Fenomena ini menarik banyak wisatawan dan peneliti karena keunikannya secara geologi. Selain menjadi tempat yang indah untuk berenang dan bersantai, Pusentasi juga menjadi spot menarik untuk fotografi dan edukasi tentang fenomena alam bawah tanah. Lingkungannya yang asri dan alami memberikan nuansa tenang yang cocok untuk rekreasi keluarga atau kunjungan edukatif.",
            lokasi: "Donggala, Sulawesi Tengah",
            durasi: "1 hari",
            aktivitas: "Wisata alam, Foto-foto, Berenang"
        },
        cagarAlamMorowali: {
            nama: "Cagar Alam Morowali",
            gambar: "./assets/CagarAlamMorowali.jpg",
            deskripsi: "Cagar Alam Morowali merupakan kawasan konservasi yang terletak di wilayah Sulawesi Tengah dan memiliki luas lebih dari 200 ribu hektar. Tempat ini merupakan habitat bagi berbagai spesies endemik, seperti anoa, babirusa, dan berbagai jenis burung langka yang hanya bisa ditemukan di Sulawesi. Kawasan ini juga kaya akan flora tropis yang masih sangat alami. Bagi para pecinta alam, trekking di jalur-jalur yang ada di Morowali akan memberikan pengalaman luar biasa dalam menyatu dengan alam. Selain itu, pengunjung juga bisa belajar tentang pentingnya pelestarian lingkungan dan keanekaragaman hayati Indonesia. Suasana yang sejuk dan keheningan alam menjadikan tempat ini sangat cocok untuk petualangan dan refleksi diri.",
            lokasi: "Morowali, Sulawesi Tengah",
            durasi: "2-4 hari",
            aktivitas: "Trekking, Observasi satwa, Wisata alam"
        },
        danauPoso: {
            nama: "Danau Poso",
            gambar: "./assets/DanauPoso.jpg",
            deskripsi: "Danau Poso adalah danau terbesar ketiga dan terdalam di Indonesia, terletak di wilayah Kabupaten Poso, Sulawesi Tengah. Danau ini dikelilingi oleh perbukitan hijau dan desa-desa tradisional yang masih memegang teguh budaya lokal, seperti Desa Tentena. Airnya yang biru jernih dan udaranya yang sejuk menciptakan suasana damai yang sempurna untuk relaksasi dan rekreasi. Pengunjung dapat menikmati wisata budaya, kuliner lokal khas Poso, serta aktivitas air seperti berperahu atau berenang. Di sekitar danau juga sering diadakan festival budaya yang memperkenalkan tarian dan musik tradisional. Danau Poso adalah pilihan tepat bagi wisatawan yang mencari keseimbangan antara keindahan alam dan kekayaan budaya.",
            lokasi: "Poso, Sulawesi Tengah",
            durasi: "2-3 hari",
            aktivitas: "Wisata danau, Budaya, Kuliner lokal"
        },
        danauTambing: {
            nama: "Danau Tambing",
            gambar: "./assets/DanauTambing.jpg",
            deskripsi: "Terletak di kawasan Taman Nasional Lore Lindu, Danau Tambing adalah surga tersembunyi bagi para pecinta alam dan fotografer. Berada di kaki Gunung Nokilalaki dengan ketinggian sekitar 1.700 meter di atas permukaan laut, danau ini menawarkan udara yang sejuk dan suasana yang tenang. Danau ini terkenal sebagai salah satu tempat terbaik untuk birdwatching di Sulawesi, karena menjadi habitat bagi lebih dari 30 jenis burung endemik Sulawesi. Aktivitas camping di tepi danau sangat populer, di mana pengunjung dapat menikmati malam di alam terbuka dengan langit penuh bintang. Eksplorasi hutan di sekitarnya juga memberikan pengalaman petualangan yang tak terlupakan.",
            lokasi: "Lore Lindu, Sulawesi Tengah",
            durasi: "1-2 hari",
            aktivitas: "Camping, Birdwatching, Trekking"
        },
        pulauKadidiri: {
            nama: "Pulau Kadidiri",
            gambar: "./assets/PulauKadidiri.jpg",
            deskripsi: "Pulau Kadidiri adalah salah satu pulau tercantik di Kepulauan Togean, Sulawesi Tengah. Pulau ini menjadi destinasi favorit bagi para penyelam dan pencinta laut karena memiliki ekosistem bawah laut yang sangat terjaga, dengan terumbu karang yang berwarna-warni dan beragam jenis biota laut. Kadidiri juga menawarkan pantai berpasir putih yang tenang serta akomodasi ramah lingkungan yang menghadap langsung ke laut. Suasana pulau yang damai tanpa hiruk-pikuk kendaraan membuatnya sempurna untuk relaksasi dan meditasi. Selain snorkeling dan diving, pengunjung juga bisa menikmati sunset yang luar biasa indah dari dermaga. Pulau ini cocok untuk wisatawan yang mencari ketenangan dan keindahan alami yang masih asli.",
            lokasi: "Kepulauan Togean, Sulawesi Tengah",
            durasi: "3 hari",
            aktivitas: "Snorkeling, Diving, Relaxing"
        }
    };

    const paketData = {
        pantaiTanjungKarang: {
            nama: "Paket Pantai Tanjung Karang",
            gambar: "./assets/TanjungKarang.jpg",
            harga: "Rp2.500.000",
            deskripsi: "Nikmati liburan 2 hari 1 malam yang menenangkan di Pantai Tanjung Karang, Donggala. Pantai ini terkenal dengan pasir putihnya yang halus, air laut yang jernih kebiruan, dan panorama sunset yang menakjubkan. Paket ini menawarkan pengalaman snorkeling untuk melihat keindahan bawah laut, serta waktu luang untuk bersantai di tepi pantai sambil menikmati angin laut yang sejuk.",
            itinerary: [
                "Hari 1: Tiba di Donggala, check-in penginapan, aktivitas snorkeling, dan menikmati sunset di pantai",
                "Hari 2: Sarapan, wisata kuliner khas laut Donggala, dan perjalanan kembali ke kota"
            ],
            destinasi: ["Pantai Tanjung Karang", "Donggala"]
        },
        pusentasi: {
            nama: "Paket Pusentasi",
            gambar: "./assets/pusentasi.JPG",
            harga: "Rp1.800.000",
            deskripsi: "Pusentasi atau pusat laut adalah fenomena geologi unik berupa sumur raksasa alami yang langsung terhubung ke laut dalam. Dalam paket wisata satu hari ini, Anda akan diajak untuk menjelajahi keindahan alam dan mempelajari sisi ilmiah dari Pusentasi bersama pemandu lokal. Cocok untuk wisata keluarga, pelajar, maupun traveler yang ingin merasakan keajaiban alam Donggala sekaligus menikmati hidangan laut segar khas daerah.",
            itinerary: [
                "Hari 1: Perjalanan ke Donggala, kunjungan ke Pusentasi, sesi edukasi geologi, dokumentasi, dan wisata kuliner"
            ],
            destinasi: ["Pusentasi", "Donggala"]
        },
        cagarAlamMorowali: {
            nama: "Paket Cagar Alam Morowali",
            gambar: "./assets/CagarAlamMorowali.jpg",
            harga: "Rp3.900.000",
            deskripsi: "Cagar Alam Morowali adalah rumah bagi beragam flora dan fauna endemik Sulawesi, termasuk anoa dan babirusa. Dalam paket petualangan selama 3 hari ini, Anda akan diajak menyusuri jalur trekking yang menantang, berkemah di tengah hutan hujan tropis, serta berinteraksi langsung dengan komunitas adat setempat. Cocok untuk pencinta alam sejati yang ingin merasakan pengalaman eksplorasi di kawasan konservasi alam.",
            itinerary: [
                "Hari 1: Perjalanan menuju kawasan konservasi Morowali dan orientasi",
                "Hari 2: Trekking mendalam, observasi satwa liar, dan kegiatan edukatif",
                "Hari 3: Kunjungan ke desa adat dan perjalanan kembali"
            ],
            destinasi: ["Cagar Alam Morowali", "Desa di sekitarnya"]
        },
        danauPoso: {
            nama: "Paket Danau Poso",
            gambar: "./assets/DanauPoso.jpg",
            harga: "Rp3.200.000",
            deskripsi: "Danau Poso merupakan salah satu danau terdalam dan terjernih di Indonesia. Dalam paket wisata ini, Anda akan menginap selama dua malam di penginapan tepi danau yang menenangkan, menikmati panorama alam yang menakjubkan, dan menjelajahi kehidupan budaya lokal di Desa Tentena. Program ini juga mencakup kunjungan ke pasar tradisional, mencicipi kuliner khas Poso, dan aktivitas santai seperti memancing dan berenang.",
            itinerary: [
                "Hari 1: Tiba di Poso, check-in penginapan tepi danau, dan aktivitas bebas",
                "Hari 2: Wisata budaya ke desa sekitar, eksplorasi Danau Poso, dan wisata kuliner",
                "Hari 3: Belanja oleh-oleh dan perjalanan pulang"
            ],
            destinasi: ["Danau Poso", "Poso", "Desa Tentena"]
        },
        danauTambing: {
            nama: "Paket Danau Tambing",
            gambar: "./assets/DanauTambing.jpg",
            harga: "Rp2.700.000",
            deskripsi: "Terletak di dalam Taman Nasional Lore Lindu, Danau Tambing adalah tempat favorit bagi para pengamat burung dan pecinta alam. Dengan udara sejuk pegunungan dan hutan hujan tropis yang mengelilingi danau, Anda akan merasakan kedamaian yang langka. Paket ini dirancang untuk Anda yang ingin merasakan suasana camping di alam liar, dengan aktivitas utama seperti birdwatching, trekking, dan fotografi alam.",
            itinerary: [
                "Hari 1: Perjalanan menuju Danau Tambing di Lore Lindu, mendirikan tenda, aktivitas santai di alam",
                "Hari 2: Birdwatching dan eksplorasi hutan, dokumentasi, dan perjalanan pulang"
            ],
            destinasi: ["Danau Tambing", "Taman Nasional Lore Lindu"]
        },
        pulauKadidiri: {
            nama: "Paket Pulau Kadidiri",
            gambar: "./assets/PulauKadidiri.jpg",
            harga: "Rp5.500.000",
            deskripsi: "Pulau Kadidiri adalah salah satu surga tropis di Kepulauan Togean yang dikenal dengan pantainya yang eksotis dan kehidupan bawah lautnya yang menakjubkan. Dalam paket 3 hari ini, Anda akan menikmati pengalaman snorkeling di terumbu karang yang masih alami, relaksasi di pantai yang sepi, serta menikmati penginapan ramah lingkungan tepat di tepi laut. Paket ini cocok bagi wisatawan yang ingin menjauh dari keramaian dan menikmati ketenangan alam secara penuh.",
            itinerary: [
                "Hari 1: Perjalanan menuju Kepulauan Togean dan check-in di resort Pulau Kadidiri",
                "Hari 2: Snorkeling di spot terumbu karang terbaik, bersantai di pantai, dan menikmati sunset",
                "Hari 3: Sarapan santai dan kembali ke pelabuhan utama untuk perjalanan pulang"
            ],
            destinasi: ["Pulau Kadidiri", "Kepulauan Togean"]
        }
    };

    if (document.getElementById("nama-destinasi")) {
        const data = destinasiData[id];
        if (data) {
            document.getElementById("nama-destinasi").textContent = data.nama;
            document.getElementById("gambar-destinasi").src = data.gambar;
            document.getElementById("gambar-destinasi").alt = data.nama;
            document.getElementById("deskripsi-destinasi").textContent = data.deskripsi;
            document.getElementById("lokasi-destinasi").textContent = data.lokasi;
            document.getElementById("durasi-destinasi").textContent = data.durasi;
            document.getElementById("aktivitas-destinasi").textContent = data.activitas || data.aktivitas;
        } else {
            document.querySelector(".container").innerHTML = `<h2>Destinasi tidak ditemukan.</h2><a href="index.html" class="btn">← Kembali</a>`;
        }

    } else if (document.getElementById("nama-paket")) {
        const data = paketData[id];
        if (data) {
            document.getElementById("nama-paket").textContent = data.nama;
            document.getElementById("gambar-paket").src = data.gambar;
            document.getElementById("gambar-paket").alt = data.nama;
            document.getElementById("harga-paket").textContent = data.harga;
            document.getElementById("deskripsi-paket").textContent = data.deskripsi;

            const itineraryList = document.getElementById("itinerary-list");
            data.itinerary.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                itineraryList.appendChild(li);
            });

            const destinasiList = document.getElementById("destinasi-list");
            data.destinasi.forEach(dest => {
                const li = document.createElement("li");
                li.textContent = dest;
                destinasiList.appendChild(li);
            });
        } else {
            document.querySelector(".container").innerHTML = `<h2>Paket tidak ditemukan.</h2><a href="index.html" class="btn">← Kembali</a>`;
        }
    }
});


//Handle Popup Pesanan
document.addEventListener("DOMContentLoaded", function () {
    const btnPesan = document.getElementById("btnPesan");
    const popupForm = document.getElementById("popupForm");
    const btnClose = document.getElementById("btnClose");
    const formPesanan = document.getElementById("formPesanan");

    if (btnPesan && popupForm && btnClose) {
        btnPesan.addEventListener("click", () => {
            popupForm.classList.remove("hidden");
        });

        btnClose.addEventListener("click", () => {
            popupForm.classList.add("hidden");
        });

        formPesanan.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Pesanan berhasil dibuat!");
            popupForm.classList.add("hidden");
            formPesanan.reset();
        });
    }
});  
