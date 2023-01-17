import WhiteLogo from "../Logo/WhiteLogo";

const LoginPage = () => {
  return (
    <>
      <div>
        <div>
          <form>
            <WhiteLogo />
            <label>
              <input />
            </label>
            <label>
              <input />
            </label>
            <button>Login</button>
          </form>
          <div>
            <div>----or------</div>
            <div>Log in with Facebook</div>
            <div>Forgot password ?</div>
          </div>
        </div>
        <div>
          <span>Dont'have an account?</span>
          <a>Sign up</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
