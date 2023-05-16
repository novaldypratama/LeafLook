---
layout: post
title: Senior Project Modul 02 – SDLC & GIT
date: '2023-03-07 02:08:11 +0700'
categories: senpro
published: true
---

# PR Kelompok 05

## Lab 2.3
[![Static Web](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://novaldypratama.github.io/LeafLook/)

## Lab 2.4
### Metodologi
**Kanban**
### Alasan
Kanban memiliki fleksibilitas yang cukup tinggi baik dalam hal waktu dan role yang ditetapkan. Setiap orang dalam tim dapat menjadi developer dan mengerjakan tugas sesuai dengan yang telah ditentukan. Fleksibilitas waktu yang tinggi cocok dengan kondisi yang dimiliki anggota kelompok karena memiliki tanggung jawab lain sebagai mahasiswa. Meskipun memiliki fleksibilitas, kanban tetap dapat membantu developer untuk melakukan tracking terhadap setiap perkembangan yang telah dilakukan. Selain itu, metodologi ini menggunakan papan untuk mengelompokan tugas berdasarkan tahapannya, seperti in progress atau sudah selesai. Setiap tugas yang ada tidak diberikan secara langsung terhadap developer, tetapi developer tersebut yang harus menentukan tugas mana yang akan dipilih untuk dikerjakan. Setiap developer tidak boleh mengambil tugas baru sebelum menyelesaikan tugas yang lama. Dengan demikian, kanban dapat mencegah beban tim berlebihan dan menigkatkan produktivitas tim.
### Perancangan SDLC
#### Tujuan Produk
1. Pengguna dapat mengetahui penyakit apa yang dimiliki oleh tanamannya melalui gambar yang diunggah pada WebApp
2. Pengguna dapat mengetahui cara merawat dan mengobati tanaman sesuai dengan penyakit yang dimiliki oleh tanaman tersebut
3. Pengguna dapat mencegah adanya kerugian yang disebabkan oleh penyakit tanaman tersebut
4. Pengguna dapat segera melindungi tanaman lainnya agar tidak terserang penyakit yang sama

#### Pengguna potensial dari produk dan kebutuhan para pengguna
Pengguna potensial:
- Petani
- Orang yang memiliki ketertarikan berkebun
- Orang yang sedang melakukan penelitian mengenai penyakit tumbuhan

Kebutuhan para pengguna:
- Mengetahui jenis penyakit yang ada pada tumbuhan
- Mengetahui penjelasan penyakit tumbuhan
- Mengetahui cara mengatasi penyakit tumbuhan

#### Use case diagram
![Use Case Diagram](https://github.com/novaldypratama/LeafLook/tree/main/docs/img/modul02/Use-Case-Diagram.png?raw=true "Use Case Diagram")

#### Functional Requirements

| FR | Deskripsi |
| -- | --------- |
| Register | User mengisi data diri, meliputi nama, username, password, dan confirm password untuk menghindari kesalahan penulisan. Apabila semua data telah terisi, data password sama dengan confirm password, dan username unik terhadapat username lain, sistem akan menyimpan data user tersebut. Apabila kondisi sebelumnya ada yang tidak terpenuhi sistem akan memberikan peringatan. Setelah berhasil terdaftar sistem akan mengarahkan user ke halaman login |
| Login | User menuliskan username dan password. Apabila username username dan password sesuai, sistem akan memberikan akses untuk masuk ke dalam website sesuai dengan data user yang tersimpan. Apabila username tidak terdaftar atau username dan password tidak sesuai, sistem akan memberikan peringatan |
| Search Plant Disease with Upload Photo | User akan memilih opsi untuk mencari penyakit tanaman dengan menggunakan foto. Sistem akan meminta user untuk meng-upload foto yang telah dipilih. Setelah berhasil dikirimkan, foto akan diberikan kepada sistem kecerdasan buatan untuk dianalisis. Setelah analisis selesai, sistem akan memanggil API wikipedia untuk mengambil informasi mengenai jenis penayakit tanaman berdasarkan nama penyakit yang didapatkan. Setelah didapat, sistem akan menampilkan semua informasi kepada user |
| Search Plant Disease with Camera | User akan memilih opsi untuk mencari penyakit tanaman dengan menggunakan kamera. Sistem akan izin untuk mengakses kamera perangkat yang digunakan user. Apabila diizinkan, kamera akan terbuka dan user diminta untuk mengarahkannya ke tanaman. Sistem akan memfoto tanaman tersebut dan mengirimkan gambarnya ke sistem kecerdasan bautan untuk dianalisis. Setelah analisis selesai, sistem akan memanggil API wikipedia untuk mengambil informasi mengenai jenis penayakit tanaman berdasarkan nama penyakit yang didapatkan. Setelah didapat, sistem akan menampilkan semua informasi kepada user |
| Search Plant Disease with Search Bar | User akan mengetikkan jenis penyakit tanaman. Sistem akan memanggil API wikipedia untuk mengambil informasi mengenai jenis penayakit tanaman berdasarkan kata yang dimasukkan dalam search bar. Setelah didapat, sistem akan menampilkan semua informasi kepada user |
| Archive Information to User Folder | Apabila terdapat informasi yang ingin di bookmark, user dapat menekan tombol yang telah disediakan. Setelah tombol tersebut ditekan, sistem akan menyimpan informasi tersebut agar dapat diakses kembali oleh user. Setelah proses berhasil, sistem akan memberikan pesan |
| Delete Information from User Folder | User memilih informasi yang ingin dihapus.User menekan tombol yang telah disediakan. Sistem akan menghapus pesan tersebut dari folder. Setelah proses berhasil, sistem akan memberikan pesan |

#### Entity Relationship Diagram

![ERD](https://github.com/novaldypratama/LeafLook/tree/main/docs/img/modul02/ERD.png?raw=true "ERD")

#### Low-fidelity Wireframe
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/LMWuSG9XClSCS6oJPkyzhz/Low-fi-Leaflook?node-id=575%3A1414&t=dznAUuglZWRZgKOR-1)

#### Gantt-Chart Pengerjaan Proyek

![Gantt Chart](https://github.com/novaldypratama/LeafLook/tree/main/docs/img/modul02/Gantt-Chart.png?raw=true "Gantt Chart")

## Lab 2.5
### Breakdown Proyek
**Nama Proyek: LeafLook**

![Breakdown Project](https://github.com/novaldypratama/LeafLook/tree/main/docs/img/modul02/Breakdown-Project.png?raw=true "Breakdown Project")
