// Breadcrumb.jsx
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from './../../assets/herobg.jpg'
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
   <div className='-z-10'>
   {
    pathnames.length > 0 && (
        <nav className="font-medium mb-2">
        <div
                      className="relative h-screen flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        height:'200px'
                      }}
        >
            <div className="container mx-auto  text-2xl text-white bg-[#fff] p-10 text-center">
      <ol className="flex items-center justify-center absolute inset-0 bg-black opacity-40">
        {pathnames.length > 0 && (
          <li>
            <Link to="/" className="text-primaryColor hover:text-secondaryColor">
              Home
            </Link>
          </li>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className={isLast ? 'capitalize' : 'capitalize'}>
              {isLast ? (
                <span>/ {name}</span>
              ) : (
                <Link to={routeTo} className="text-primaryColor hover:text-secondaryColor">
                  /{name} 
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      </div>
        </div>
      
    </nav>
    )
   }
   </div>
  );
};

export default Breadcrumb;
