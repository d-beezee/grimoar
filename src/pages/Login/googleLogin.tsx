import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { usePostAuthGoogleMutation } from "@src/features/api";

export const useGoogleLogin = () => {
  const [login] = usePostAuthGoogleMutation();

  const loginWithGoogle = async () => {
    const google = await FirebaseAuthentication.signInWithGoogle();
    // await GoogleAuth.signIn();
    // const google = await GoogleAuth.refresh();
    if (google && google.credential && google.credential.accessToken) {
      const res = await login({
        body: { accessToken: google.credential.accessToken },
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
