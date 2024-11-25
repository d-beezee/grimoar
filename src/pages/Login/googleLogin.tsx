import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { usePostAuthGoogleMutation } from "@src/features/api";

export const useGoogleLogin = () => {
  const [login] = usePostAuthGoogleMutation();
  const loginWithGoogle = async () => {
    await GoogleAuth.signIn();
    const google = await GoogleAuth.refresh();
    if (google && google.accessToken) {
      const res = await login({
        body: { accessToken: google.accessToken },
      }).unwrap();

      if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.reload();
      }
    }
    return false;
  };

  return { loginWithGoogle };
};
