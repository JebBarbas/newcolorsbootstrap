const add_full_kit = ()=>{
    /* Comprueba si el script contiene la clase add-bootstrap-css, si lo tiene, añade bootstrap y ncb */
    if(document.querySelector('script.add-full-kit')){
        /* En esta variable se guarda el comentario que irá en los divs */
        let com = `<!-- Code inscrusted By NewColorsBootstrap (Bootstrap 5.0.0-beta1 and NewColorsBootstrap 1.3.0) -->`;

        /* Se crea el <div> para los links */
        let _div_links_ = document.createElement('div');
        _div_links_.innerHTML = com;

        /* Se crea el <div> para los scripts */
        let _div_scripts_ = document.createElement('div');
        _div_scripts_.innerHTML = com;

        /* Se crea el <link> de bootstrap */
        let _link_bs_ = document.createElement('link');
        _link_bs_.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
        _link_bs_.setAttribute('rel','stylesheet');
        _link_bs_.setAttribute('integrity','sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1');
        _link_bs_.setAttribute('crossorigin','annonymus');

        /* Se crea el <link> de ncb */
        let _link_ncb_ = document.createElement('link');
        _link_ncb_.setAttribute('href','https://cdn.jsdelivr.net/gh/jebbarbas/newcolorsbootstrap@v1.3.0/ncb.min.css');
        _link_ncb_.setAttribute('rel','stylesheet');
        _link_ncb_.setAttribute('crossorigin','annonymus');

        /* Se crea el <script> de bootstrap_bundle */
        let _script_bs_ = document.createElement('script');
        _script_bs_.setAttribute('src','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js');
        _script_bs_.setAttribute('integrity','sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW');
        _script_bs_.setAttribute('crossorigin','annonymus');

        /* Se meten los <link> en el <div> */
        _div_links_.append(_link_bs_);
        _div_links_.append(_link_ncb_);

        /* Se mete el <script> en el <div> */
        _div_scripts_.append(_script_bs_);

        /* Se mete el <div>:links en el <head> */
        document.head.append(_div_links_);

        /* Se mete el <div>:scripts en el <body> */
        document.body.append(_div_scripts_);
    }
};

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
    add_full_kit();

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
