// Program prosedural untuk mengelola data mahasiswa
 
// Data mahasiswa menggunakan array of object
let daftarMahasiswa: Array<{nama: string, nim: string, nilai: number}> = [];
 
// Fungsi untuk menambah mahasiswa
function tambahMahasiswa(nama: string, nim: string, nilai: number): void {
    daftarMahasiswa.push({nama, nim, nilai});
    console.log(`Mahasiswa ${nama} berhasil ditambahkan`);
}
 
// Fungsi untuk menampilkan semua mahasiswa
function tampilkanSemuaMahasiswa(): void {
    console.log("\n=== DAFTAR MAHASISWA ===");
    for (let i = 0; i < daftarMahasiswa.length; i++) {
        let mhs = daftarMahasiswa[i];
        console.log(`${i+1}. ${mhs.nama} (${mhs.nim}) - Nilai: ${mhs.nilai}`);
    }
}
 
// Fungsi untuk menghitung rata-rata nilai
function hitungRataRata(): number {
    let total = 0;
    for (let mhs of daftarMahasiswa) {
        total += mhs.nilai;
    }
    return daftarMahasiswa.length > 0 ? total / daftarMahasiswa.length : 0;
}
 
// Fungsi untuk mencari mahasiswa berdasarkan NIM
function cariMahasiswa(nim: string): {nama: string, nim: string, nilai: number} | null {
    for (let mhs of daftarMahasiswa) {
        if (mhs.nim === nim) {
            return mhs;
        }
    }
    return null;
}
 
// Main program
console.log("=== PROGRAM PROSEDURAL MANAJEMEN MAHASISWA ===\n");
 
// Menambah data mahasiswa
tambahMahasiswa("Andi Wijaya", "DT23001", 85);
tambahMahasiswa("Budi Santoso", "DT23002", 72);
tambahMahasiswa("Citra Dewi", "DT23003", 90);
 
// Menampilkan semua mahasiswa
tampilkanSemuaMahasiswa();
 
// Menampilkan rata-rata
console.log(`\nRata-rata nilai: ${hitungRataRata().toFixed(2)}`);
 
// Mencari mahasiswa
let hasilCari = cariMahasiswa("DT23003");
if (hasilCari) {
    console.log(`\nHasil pencarian: ${hasilCari.nama} - Nilai: ${hasilCari.nilai}`);
} else {
    console.log("\nMahasiswa tidak ditemukan");
}