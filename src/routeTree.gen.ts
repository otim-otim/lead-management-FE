/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as LeadsIndexImport } from './routes/leads/index'
import { Route as FollowupsIndexImport } from './routes/followups/index'
import { Route as LeadsCreateIndexImport } from './routes/leads/create/index'
import { Route as FollowupsShowIndexImport } from './routes/followups/show/index'
import { Route as FollowupsCreateIndexImport } from './routes/followups/create/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const LeadsIndexRoute = LeadsIndexImport.update({
  id: '/leads/',
  path: '/leads/',
  getParentRoute: () => rootRoute,
} as any)

const FollowupsIndexRoute = FollowupsIndexImport.update({
  id: '/followups/',
  path: '/followups/',
  getParentRoute: () => rootRoute,
} as any)

const LeadsCreateIndexRoute = LeadsCreateIndexImport.update({
  id: '/leads/create/',
  path: '/leads/create/',
  getParentRoute: () => rootRoute,
} as any)

const FollowupsShowIndexRoute = FollowupsShowIndexImport.update({
  id: '/followups/show/',
  path: '/followups/show/',
  getParentRoute: () => rootRoute,
} as any)

const FollowupsCreateIndexRoute = FollowupsCreateIndexImport.update({
  id: '/followups/create/',
  path: '/followups/create/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/followups/': {
      id: '/followups/'
      path: '/followups'
      fullPath: '/followups'
      preLoaderRoute: typeof FollowupsIndexImport
      parentRoute: typeof rootRoute
    }
    '/leads/': {
      id: '/leads/'
      path: '/leads'
      fullPath: '/leads'
      preLoaderRoute: typeof LeadsIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/followups/create/': {
      id: '/followups/create/'
      path: '/followups/create'
      fullPath: '/followups/create'
      preLoaderRoute: typeof FollowupsCreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/followups/show/': {
      id: '/followups/show/'
      path: '/followups/show'
      fullPath: '/followups/show'
      preLoaderRoute: typeof FollowupsShowIndexImport
      parentRoute: typeof rootRoute
    }
    '/leads/create/': {
      id: '/leads/create/'
      path: '/leads/create'
      fullPath: '/leads/create'
      preLoaderRoute: typeof LeadsCreateIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/followups': typeof FollowupsIndexRoute
  '/leads': typeof LeadsIndexRoute
  '/login': typeof LoginIndexRoute
  '/followups/create': typeof FollowupsCreateIndexRoute
  '/followups/show': typeof FollowupsShowIndexRoute
  '/leads/create': typeof LeadsCreateIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/followups': typeof FollowupsIndexRoute
  '/leads': typeof LeadsIndexRoute
  '/login': typeof LoginIndexRoute
  '/followups/create': typeof FollowupsCreateIndexRoute
  '/followups/show': typeof FollowupsShowIndexRoute
  '/leads/create': typeof LeadsCreateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/followups/': typeof FollowupsIndexRoute
  '/leads/': typeof LeadsIndexRoute
  '/login/': typeof LoginIndexRoute
  '/followups/create/': typeof FollowupsCreateIndexRoute
  '/followups/show/': typeof FollowupsShowIndexRoute
  '/leads/create/': typeof LeadsCreateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/followups'
    | '/leads'
    | '/login'
    | '/followups/create'
    | '/followups/show'
    | '/leads/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/followups'
    | '/leads'
    | '/login'
    | '/followups/create'
    | '/followups/show'
    | '/leads/create'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/followups/'
    | '/leads/'
    | '/login/'
    | '/followups/create/'
    | '/followups/show/'
    | '/leads/create/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  FollowupsIndexRoute: typeof FollowupsIndexRoute
  LeadsIndexRoute: typeof LeadsIndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
  FollowupsCreateIndexRoute: typeof FollowupsCreateIndexRoute
  FollowupsShowIndexRoute: typeof FollowupsShowIndexRoute
  LeadsCreateIndexRoute: typeof LeadsCreateIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  FollowupsIndexRoute: FollowupsIndexRoute,
  LeadsIndexRoute: LeadsIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  FollowupsCreateIndexRoute: FollowupsCreateIndexRoute,
  FollowupsShowIndexRoute: FollowupsShowIndexRoute,
  LeadsCreateIndexRoute: LeadsCreateIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/followups/",
        "/leads/",
        "/login/",
        "/followups/create/",
        "/followups/show/",
        "/leads/create/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/followups/": {
      "filePath": "followups/index.tsx"
    },
    "/leads/": {
      "filePath": "leads/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/followups/create/": {
      "filePath": "followups/create/index.tsx"
    },
    "/followups/show/": {
      "filePath": "followups/show/index.tsx"
    },
    "/leads/create/": {
      "filePath": "leads/create/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
