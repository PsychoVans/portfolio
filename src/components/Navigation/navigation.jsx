import { Link, useNavigate } from "react-router-dom";
import "./navigation.scss";
import { Link as ScrollLink } from "react-scroll";

export const Navigation = () => {
  //const user = useSelector(selectUser);
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let user;
  const handleSignOut = async () => {
    try {
      // await signOutService();
      //     dispatch(signOutUserAction({ id: "", email: "" }));
      navigate("/logout");
    } catch (err) {
      console.log(err);
    }
  };

  const onClickScroll = () => {};

  return (
    <nav className="container">
      <div className="container__auth">
        {!user?.id.length ? (
          <>
            <Link className="auth__button--nav" to="/signin">
              Signin
            </Link>
            <Link className="auth__button--nav" to="/signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <div className="hi__user">Howdy! {user.email}</div>
            <button type="button" className="auth__button--nav">
              Give Things Back
            </button>
            <button
              onClick={handleSignOut}
              className="auth__button--nav"
              type="button"
            >
              Wyloguj
            </button>
          </>
        )}
      </div>
      <div className="container--nav">
        <ScrollLink className="button__nav" to="elementStart">
          Start
        </ScrollLink>
        <button
          type="button"
          className="button__nav"
          id="elementFourSteps"
          onClick={onClickScroll}
        >
          Whats the issue?
        </button>
        <button
          className="button__nav"
          type="button"
          id="elementAboutUs"
          onClick={onClickScroll}
        >
          About us
        </button>
        <ScrollLink className="button__nav" type="button" to="whatWeHelp">
          Fundation and Organizations
        </ScrollLink>
        <button
          className="button__nav"
          type="button"
          id="elementContact"
          onClick={onClickScroll}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
