const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = authServices.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
    }, []);

    const logOut = () => {
      authServices.logout();
    };

  return (
    <div>
    <nav>
       {currentUser ? (
           <div className="navbar-nav ms-auto">
             <li className="nav-item">
               <a href="/" className="nav-link" onClick={logOut}>
                 Logout
               </a>
             </li>
           </div>
         ) 
         : (
           <div className="navbar-nav ms-auto">
             <li className="nav-item">
               <Link to={"/receptionistlogin/*"} className="nav-link">
                 Login
               </Link>
             </li>
           </div>
         )
         }
    </nav>
    </div>)