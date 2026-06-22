export default function Footer() {
  return (
    <footer id="contact" className="bg-[#06182f] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-black">
            Rrjeti i Qeverive të Nxënësve – ZVA Kamëz
          </h3>
          <p className="mt-4 text-blue-100">
            Një rrjet për lidershipin, përfaqësimin dhe qytetarinë aktive të nxënësve.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#f4c95d]">Kontakt</h4>
          <p className="mt-3 text-blue-100">
            Email: krenardunga@presidencazvakamez.com
          </p>
          <p className="text-blue-100">ZVA Kamëz, Shqipëri</p>
        </div>
      </div>
    </footer>
  );
}