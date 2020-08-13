/* Comprueba si el script contiene la clase add-bootstrap-css, si lo tiene, añade bootstrap y ncb */
if(document.querySelector('script.add-bootstrap-css')){
    /* Se crea el <div> para los links */
    let _div_ = document.createElement('div');
    _div_.innerHTML = `<!-- code inscrusted By ncb.js (bootstrap 4.5.2 and newcolorsbootstrap) -->`;

    /* Se crea el <link> de bootstrap */
    let _link_bs_ = document.createElement('link');
    _link_bs_.setAttribute('rel','stylesheet');
    _link_bs_.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    _link_bs_.setAttribute('crossorigin','annonymus');

    /* Se crea el <link> de ncb */
    let _link_ncb_ = document.createElement('link');
    _link_ncb_.setAttribute('rel','stylesheet');
    _link_ncb_.setAttribute('href','https://cdn.jsdelivr.net/gh/jebbarbas/newcolorsbootstrap@v1.2.0/ncb.min.css');
    _link_ncb_.setAttribute('crossorigin','annonymus');

    /* Se meten los <link> en el <div> */
    _div_.append(_link_bs_);
    _div_.append(_link_ncb_);

    /* Se mete el <div> en el <head> */
    document.head.append(_div_);
}
/* Esta funcion se encarga de mostrar y ocultar el sidebar */
const ncbToggleSidebar = () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let sidebar_toggler = document.getElementsByClassName("sidebar-toggler")[0];
    let sidebar_toggler_toggled = document.getElementsByClassName("sidebar-toggler-toggled")[0];

    /* Comprueba si existen los elementos para que no marque ningun error */
    if(sidebar && sidebar_toggler && sidebar_toggler_toggled){
        sidebar.classList.toggle("toggled");
        sidebar_toggler.classList.toggle("d-none");
        sidebar_toggler_toggled.classList.toggle("d-none");
    }
    else{
        console.log('The sidebar will not work because you need to add the 3 components: sidebar sidebar-toggler sidebar-toggler-toggled');
    }
};
/* Esta funcion es para cargar el JS una vez cargado el DOM */
const ncbChargeJS = () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let sidebar_toggler = document.getElementsByClassName("sidebar-toggler")[0];
    let sidebar_toggler_toggled = document.getElementsByClassName("sidebar-toggler-toggled")[0];

    /* Igualmente comprueba si existen los 3 elementos */
    if(sidebar && sidebar_toggler && sidebar_toggler_toggled){
        sidebar_toggler_toggled.classList.add('d-none');
        
        sidebar_toggler.addEventListener("click", () => {
            ncbToggleSidebar();
        });

        sidebar_toggler_toggled.addEventListener("click", () => {
            ncbToggleSidebar();
        });
    }
    else{
        console.log('The sidebar will not work because you need to add the 3 components: sidebar sidebar-toggler sidebar-toggler-toggled');
    }
};
document.addEventListener("DOMContentLoaded", ncbChargeJS);
