const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Superio by{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          babysitter
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
