// Reusable navigation button.
function NavButton({ name, url, active, onClick }) {
  const handleClick = (e) => {
    e.preventDefault(); 
    onClick(name);
  };

  return (
    <a
      href={url}
      className={active ? "nav-button active" : "nav-button"}
      onClick={handleClick}
    >
      {name}
    </a>
  );
}

export default NavButton;
