const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" name="phone" placeholder="+7 701 777 44 33" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>SMS</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="sms-code"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
