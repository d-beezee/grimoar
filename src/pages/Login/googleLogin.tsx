import { SocialLogin } from "@capgo/capacitor-social-login";
import { usePostAuthGoogleMutation } from "@src/features/api";

export const useGoogleLogin = () => {
  const [login] = usePostAuthGoogleMutation();
  const loginWithGoogle = async () => {
    const google = await SocialLogin.login({
      provider: "google",
      options: {},
    });
    if (google.result && google.result.accessToken) {
      const res = await login({
        body: { accessToken: google.result.accessToken.token },
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
