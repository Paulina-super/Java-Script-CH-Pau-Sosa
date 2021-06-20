const app = new ProductoController(new ProductoModel(), new ProductoView());

const routes = [
    { path: '/', action: 'agregar' },
    { path: '/pagina1', action: 'listar' },
    { path: '/pagina2', action: 'buscar' },
];

const router = () => {
    const path = parseLocation();
    const { action = 'error' } = findActionByPath(path, routes) || {};

    switch (action) {
        case 'agregar':
            app.agregar('#app');
            break;
        case 'listar':
            app.listar('#app');
            break;
        case 'buscar':
            app.buscar('#app');
            break;
        default:
            ErrorComponent('#app')
            break;
    }
};