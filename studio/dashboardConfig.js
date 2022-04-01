export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62474cf35682fb7ac1a8bc27',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fzm68omf',
                  apiId: 'f446f947-0701-4541-afe9-24d91d644417'
                },
                {
                  buildHookId: '62474cf407c45104fc47298f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v75pgs9n',
                  apiId: '6b4ab031-1739-4529-b72b-2e449ee2e2b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrislacey89/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v75pgs9n.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
