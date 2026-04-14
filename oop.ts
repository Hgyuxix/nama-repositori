// Program OOP untuk mengelola data mahasiswa
 
// Definisi kelas Mahasiswa
class Mahasiswa {
    // Atribut
    private nama: string;
    private nim: string;
    private nilai: number;
    
    // Constructor
    constructor(nama: string, nim: string, nilai: number) {
        this.nama = nama;
        this.nim = nim;
        this.nilai = nilai;
    }
    
    // Getter methods
    getNama(): string {
        return this.nama;
    }
    
    getNim(): string {
        return this.nim;
    }
    
    getNilai(): number {
        return this.nilai;
    }
    
    // Method untuk menampilkan info
    tampilkanInfo(): void {
        console.log(`${this.nama} (${this.nim}) - Nilai: ${this.nilai}`);
    }
    
    // Method untuk mendapatkan grade
    getGrade(): string {
        if (this.nilai >= 85) return "A";
        if (this.nilai >= 70) return "B";
        if (this.nilai >= 60) return "C";
        return "D";
    }
    
    // Method untuk update nilai
    updateNilai(nilaiBaru: number): void {
        if (nilaiBaru >= 0 && nilaiBaru <= 100) {
            this.nilai = nilaiBaru;
            console.log(`Nilai ${this.nama} diupdate menjadi ${nilaiBaru}`);
        } else {
            console.log("Nilai harus antara 0-100");
        }
    }
}
 
// Definisi kelas ManajemenMahasiswa
class ManajemenMahasiswa {
    private daftarMahasiswa: Mahasiswa[] = [];
    
    // Method untuk menambah mahasiswa
    tambahMahasiswa(mahasiswa: Mahasiswa): void {
        this.daftarMahasiswa.push(mahasiswa);
        console.log(`Mahasiswa ${mahasiswa.getNama()} berhasil ditambahkan`);
    }
    
    // Method untuk menampilkan semua mahasiswa
    tampilkanSemua(): void {
        console.log("\n=== DAFTAR MAHASISWA ===");
        for (let i = 0; i < this.daftarMahasiswa.length; i++) {
            console.log(`${i+1}. `);
            this.daftarMahasiswa[i].tampilkanInfo();
            console.log(`   Grade: ${this.daftarMahasiswa[i].getGrade()}`);
        }
    }
    
    // Method untuk menghitung rata-rata
    hitungRataRata(): number {
        let total = 0;
        for (let mhs of this.daftarMahasiswa) {
            total += mhs.getNilai();
        }
        return this.daftarMahasiswa.length > 0 ? total / this.daftarMahasiswa.length : 0;
    }
    
    // Method untuk mencari berdasarkan NIM
    cariMahasiswa(nim: string): Mahasiswa | null {
        for (let mhs of this.daftarMahasiswa) {
            if (mhs.getNim() === nim) {
                return mhs;
            }
        }
        return null;
    }
    
    // Method untuk mendapatkan jumlah mahasiswa
    getJumlahMahasiswa(): number {
        return this.daftarMahasiswa.length;
    }
}
 
// Main program
console.log("=== PROGRAM OOP MANAJEMEN MAHASISWA ===\n");
 
// Membuat objek manajemen
let manajemen = new ManajemenMahasiswa();
 
// Membuat objek mahasiswa
let mhs1 = new Mahasiswa("Andi Wijaya", "DT23001", 85);
let mhs2 = new Mahasiswa("Budi Santoso", "DT23002", 72);
let mhs3 = new Mahasiswa("Citra Dewi", "DT23003", 90);
 
// Menambah mahasiswa ke sistem
manajemen.tambahMahasiswa(mhs1);
manajemen.tambahMahasiswa(mhs2);
manajemen.tambahMahasiswa(mhs3);
 
// Menampilkan semua mahasiswa
manajemen.tampilkanSemua();
 
// Menampilkan statistik
console.log(`\n=== STATISTIK ===`);
console.log(`Jumlah Mahasiswa: ${manajemen.getJumlahMahasiswa()}`);
console.log(`Rata-rata nilai: ${manajemen.hitungRataRata().toFixed(2)}`);
 
// Update nilai
console.log(`\n=== UPDATE NILAI ===`);
mhs2.updateNilai(88);
console.log(`Grade baru ${mhs2.getNama()}: ${mhs2.getGrade()}`);
 
// Tampilkan ulang setelah update
manajemen.tampilkanSemua();
