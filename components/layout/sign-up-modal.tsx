import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";

const SignUpModal = ({
  showSignUpModal,
  setShowSignUpModal,
}: {
  showSignUpModal: boolean;
  setShowSignUpModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignUpModal} setShowModal={setShowSignUpModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="#">
            <Image
              src="/logo_pulpis.webp"
              alt="Logo"
              className="h-12 w-10"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Daftar</h3>
          <p className="text-sm text-gray-500">
            Silakan melakukan pendaftaran untuk mengunduh data publik.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <button className="border-gray-200 bg-white text-black hover:bg-gray-50 flex h-10 w-full items-center justify-center space-x-3 rounded-md text-sm shadow-sm transition-all duration-75 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-plus w-4 h-4"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
              <p>Daftar</p>
            </button>

          <Link href="admin">
            <button className="border-gray-200 bg-white text-black hover:bg-gray-50 flex h-10 w-full items-center justify-center space-x-3 rounded-md text-sm shadow-sm transition-all duration-75 focus:outline-none" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-in w-4 h-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              <p>Login</p>
            </button>
          </Link>
        
        </div>
      </div>
    </Modal>
  );
};

export function useSignUpModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const SignUpModalCallback = useCallback(() => {
    return (
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    );
  }, [showSignUpModal, setShowSignUpModal]);

  return useMemo(
    () => ({ setShowSignUpModal, SignUpModal: SignUpModalCallback }),
    [setShowSignUpModal, SignUpModalCallback],
  );
}
