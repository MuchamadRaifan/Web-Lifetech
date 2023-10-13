import React from 'react';
import Logo from '../assets/images/Logo.png'

class HomePage extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white p-4 shadow">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <img src="../assets/images/Logo.img" alt="Logo" />
              <div className="flex items-center">
                <a href="#" className="mr-4 text-gray-800">About</a>
                <a href="#" className="mr-4 text-gray-800">Tentang Kami</a>
                <a href="#" className="mr-4 text-gray-800">Layanan</a>
                <a href="#" className="mr-4 text-gray-800">Kontak</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Futuristic Living</h1>
            <h1 className="text-4xl font-bold mb-4">With Technologi</h1>
            <p className="text-lg mb-8">Mengubah Dunia Melalui Inovasi Teknologi</p>
          </div>
        </section>

        {/* About Us */}
        <section className="container mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
              <p className="text-gray-700 mb-6">Deskripsi tentang perusahaan Anda dan visi misi kami.</p>
              <a href="#" className="text-blue-900 font-semibold hover:underline">Baca Lebih Lanjut</a>
            </div>
            <div>
              <img src="path/ke/gambar.jpg" alt="Deskripsi Gambar" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Layanan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-4">Layanan 1</h3>
                <p className="text-gray-700 mb-6">Deskripsi singkat tentang layanan 1 Anda.</p>
                <a href="#" className="text-blue-900 font-semibold hover:underline">Pelajari Lebih Lanjut</a>
              </div>
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-4">Layanan 2</h3>
                <p className="text-gray-700 mb-6">Deskripsi singkat tentang layanan 2 Anda.</p>
                <a href="#" className="text-blue-900 font-semibold hover:underline">Pelajari Lebih Lanjut</a>
              </div>
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-bold mb-4">Layanan 3</h3>
                <p className="text-gray-700 mb-6">Deskripsi singkat tentang layanan 3 Anda.</p>
                <a href="#" className="text-blue-900 font-semibold hover:underline">Pelajari Lebih Lanjut</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="container mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">Kami siap membantu Anda. Hubungi kami melalui formulir di bawah ini.</p>
              <a href="#" className="text-blue-900 font-semibold hover:underline">Hubungi Kami</a>
            </div>
            <div>
              <img src="path/ke/gambar.jpg" alt="Deskripsi Gambar" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>Hak Cipta © 2023 Nama Perusahaan</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
