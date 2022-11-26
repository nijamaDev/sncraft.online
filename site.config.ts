import { siteConfig } from './lib/site-config'

export default siteConfig({
  /* (required)
    The site's root Notion page
  */
  rootNotionPageId: 'f9b740741d2c4e4bbc837800cc3a81b3',
  // rootNotionPageId: '5949ed11bc46434a95fa612339ea5a37',

  /* (optional)
    if you want to restrict pages to a single notion workspace
    (this should be a Notion ID; see the docs for how to extract this) 
  */
  rootNotionSpaceId: null,

  /* (required)
    Basic site info
  */
  name: 'Shingeki no Craft Official Site & Wiki',
  domain: 'sncraft.fanfus.com',
  author: 'Fanfus team',

  /* (optional)
    Open graph metadata
  */
  description: 'Shingeki no Craft Official Site.',

  /* (optional)
    Social usernames
  */
  twitter: 'nijamaDev',
  github: 'nijamaDev',
  linkedin: 'nijamaDev',
  // discord: 'My Server',  /* Server Name */
  // discord_invite: 'https://discord.gg/zf6g5KQ6H4', /* Discord invite link */
  // mastodon: '#', /* Optional mastodon profile URL, provides link verification */
  // newsletter: '#', /* Optional newsletter URL */
  // youtube: '#', /* Optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX` */

  /* (optional)
    Default notion icon and cover images for site-wide consistency.
    Page-specific values will override these site-wide defaults.
  */
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  /* (optional)
    Whether or not to enable support for LQIP preview images.
  */
  isPreviewImageSupportEnabled: true,

  /* (optional)
    Whether or not redis is enabled for caching generated preview images.
    NOTE: if you enable redis, you need to set the `REDIS_HOST` 
    and `REDIS_PASSWORD` environment variables.
    See the readme for more info.
  */
  isRedisEnabled: false,

  /* (optional)
    Map of notion page IDs to URL paths.
    Any pages defined here will override their default URL paths.
    Example:
  */
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  /* 
    Whether to use the default notion navigation style
    or a custom one with links to important pages.
    To use `navigationLinks`, set `navigationStyle` to `custom`.
  */
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     url: 'https://twitter.com/transitive_bs'
  //   }
  // ]
})
