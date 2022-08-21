import { Auth, getAuth } from "firebase/auth";
import { app } from "../../backend/config"

export default class FirebaseUser {
  private authApp: Auth | undefined;

  getAuth = () => {
    if (!this.authApp) {
      this.authApp = getAuth(app);
    }

    return this.authApp;
  };

}

