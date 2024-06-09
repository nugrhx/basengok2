"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignUpModal } from "./sign-up-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignUpModal, setShowSignUpModal } = useSignUpModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignUpModal />
      <div
        className={`fixed top-0 w-full flex justify-center  ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white drop-shadow-sm"
        } z-30 transition-all text-white `}
      >
  
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display font-semibold text-black text-[10px] transition-all">
            <Image
              src="/logo_pulpis.webp"
              alt="Logo Kabupaten Pulang Pisau"
              width="38"
              height="42"
              className="mr-2 rounded-sm"
            />
            <p className="max-sm:hidden">DINAS KEBUDAYAAN, KEPEMUDAAN,
              <br/> OLAHRAGA DAN PARIWISATA
              <br/>KABUPATEN PULANG PISAU</p>
          </Link>

          <div className="max-[1080px]:hidden flex items-center justify-between w-1/3">
            <Link href="/dtw" className="flex items-center font-semibold text-sm text-black hover:text-gray-500">
              <p>Daerah Tempat Wisata</p>
            </Link>
            <Link href="/amenitas" className="flex items-center font-semibold text-sm text-black hover:text-gray-500">
              <p>Amenitas</p>
            </Link>
            <Link href="/pendukung" className="flex items-center font-semibold text-sm text-black hover:text-gray-500">
              <p>Data Pendukung</p>
            </Link>
          </div>

          <div className="">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignUpModal(true)}
              >
                Daftar
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
