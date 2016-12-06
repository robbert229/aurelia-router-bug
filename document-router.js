export class DocumentsRouter {
  configureRouter(config, router) {
    config.title = 'Selarium Documents';
    config.map([
      {
        route: '/',
        redirect: 'list/'
      },
      { 
        route: '/list/',       
        name: 'documents_list',      
        moduleId: './list',      
        nav: true, 
        title: 'List Documents'
      },
      { 
        route: '/:document_key',             
        name: 'document_details', 
        moduleId: './docview/docview', 
        nav:false, 
        title: 'Document Details'
      }
    ]);

    this.router = router;
  }
}
