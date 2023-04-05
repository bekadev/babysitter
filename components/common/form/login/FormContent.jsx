import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Login to Superio</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="number" placeholder="+7 701 777 44 33" />
        </div>


        <div className="form-group">
          <label>SMS</label>
          <input type="text" name="sms-code" placeholder="sms-code" required />
        </div>


        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
            Signup
          </Link>
        </div>


      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
