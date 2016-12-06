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
        title: 'Details',
        nav: true
      },
      {
        route: 'edit',
        name: 'docview_edit',
        moduleId: './edit',
        nav: true,
        title: 'Edit'
      },
    ]);

    this.router = router;
  }
}