export class App {
configureRouter(config, router) {
    config.title = 'Projects';
    config.map([
      {
        route: '/',
        redirect: 'help/'
      },
      { 
        route: 'documents/',       
        name: 'documents',      
        moduleId: './document-router',      
        nav: true, 
        title: 'Documents'
      },
      {
        route: 'help',
        name: 'help',
        moduleId: './help',
        nav: true, 
        title: 'Help'
      }
    ]);

    this.router = router;
  }
}
