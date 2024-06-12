
const navbarAr = [];

const navbarMenuToggle = (name) => {
    if(name){
        navbarAr.length = 0;
        navbarAr.push(name);
    }

    return navbarAr[0];
}

export default navbarMenuToggle;