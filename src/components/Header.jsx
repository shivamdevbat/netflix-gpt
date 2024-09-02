import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGS } from "../utils/Constants";
import { toggleGPTSearchView } from "../utils/Gpt-Slice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 flex justify-between bg-gradient-to-b from-black z-10 w-screen">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div>
          {showGPTSearch && (
            <select
              className="p-5 m-5 text-white bg-red-600 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGS.map((lang, identifier) => (
                <option
                  key={identifier}
                  value={lang.identifier}
                  className="bg-white text-black"
                >
                  {lang.lang}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-5 mr-3 bg-purple-800 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            className="p-5 bg-red-600 text-white relative isolation-auto z-20 rounded-md"
            style={{ isolation: "isolate" }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
