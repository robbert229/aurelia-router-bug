export class Docview {
  configureRouter(config, router) {
    config.title = 'Selarium Documents';
    config.map([
      {
        route: '/',
        redirect: 'details/'
      },
      {
        route: 'details',
        name: 'docview_details',
        moduleId: './details',
        title: 'View Document'
      },
      {
        route: 'edit',
        name: 'docview_edit',
        moduleId: './edit',
        nav: true,
        title: 'Edit Document'
      },
    ]);

    this.router = router;
  }
}