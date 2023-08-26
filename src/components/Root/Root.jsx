export default function Root() {
    return (
      <>
        <div id="sidebar" className="bg-gray-100 w-1/4 p-10 h-auto">
          <h1>React Router Contacts</h1>
          <div className="flex ">
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                className="shadow appearance-none border rounded-md w-50 py-2 px-3  rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5" type="submit" >New</button>
            </form>
          </div>
          <nav className="mt-10">
            <ul className="font-2xl font-serif p-5">
              <li >
                <a  href={`/contacts/1`}>Your Name</a>
              </li>
              <li>
                <a  href={`/contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }