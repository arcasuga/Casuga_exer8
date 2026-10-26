import NavButton from "./NavButton.jsx";

export default function NavBar({ categories, active, onSelect }) {
  return (
    <nav className="navbar">
      {categories.map((category) => (
        <NavButton
          key={category}
          label={category}
          isActive={active === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </nav>
  );
}
