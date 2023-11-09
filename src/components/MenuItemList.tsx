import { MenuItem } from "../data";

type MenuItemListProps = {
  category: string;
  items: MenuItem[];
};
const MenuItemList = ({ category, items }: MenuItemListProps) => {
  const cat = category.toLowerCase();
  return (
    <section className="menu-items-section">
      <div className="menu-items">
        <h2 className="section-title">
          {cat.charAt(0).toUpperCase() + cat.slice(1, cat.length)}
        </h2>
        <ul className="menu-items-grid">
          {items.map((item) => {
            return (
              <li key={item.id} className="menu-items-item">
                <div className="menu-item-card">
                  <div className="menu-item-img-wrapper">
                    <img className="menu-item-img" src={item.imgUrl} />
                  </div>
                  <h4 className="menu-item-title">{item.title}</h4>
                  <p className="menu-item-description">{item.description}</p>
                  <button className="menu-item-btn">Add to Cart</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MenuItemList;
