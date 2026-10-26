import NavButton from "./NavButton.jsx";

// Header: store name on the left, navigation buttons and the cart button
// on the right. The layout is done with flexbox (see .navbar in App.css).
function Header({
  title,
  menus,
  activeCategory,
  onSelect,
  cartCount,
  cartOpen,
  onCartToggle,
}) {
  // Clicking the store name clears the filter and shows all products
  const handleBrandClick = (e) => {
    e.preventDefault();
    onSelect("");
  };

  return (
    <header className="navbar">
      <a href="#" className="brand" onClick={handleBrandClick}>
        {title}
      </a>

      <nav className="nav-links">
    
        {menus.map((menu) => (
          <NavButton
            key={menu.id}
            name={menu.name}
            url={menu.url}
            active={activeCategory === menu.name}
            onClick={onSelect}
          />
        ))}

        <NavButton
          name={`Cart (${cartCount})`}
          url="#"
          active={cartOpen}
          onClick={onCartToggle}
        />
      </nav>
    </header>
  );
}

export default Header;
