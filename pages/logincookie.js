import { useEffect } from "react";
import Cookies from "js-cookie";

function logincookie() {
    // const [cookie, setCookie] = useCookies(["user"]);
    Cookies.set('name', 'ram');
    let name = Cookies.get('name');
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default logincookie
