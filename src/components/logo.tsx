import { useRouter } from "next/navigation";

export const AlkawnLogo = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      <img
        className="ml-5"
        src="icons/logo_white.png"
        alt="alkawn"
        height={30}
        width={30}
      />
    </button>
  );
};
