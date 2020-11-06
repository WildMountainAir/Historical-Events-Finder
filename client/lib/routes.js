/*
Routes
Based on the previous db.json file, here are all the default routes. You can also add other routes using --routes.

Plural routes
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
Singular routes
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
Filter
Use . to access deep properties

GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
Paginate
Use _page and optionally _limit to paginate returned data.

In the Link header you'll get first, prev, next and last links.

GET /posts?_page=7
GET /posts?_page=7&_limit=20
10 items are returned by default

Sort
Add _sort and _order (ascending order by default)

GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
For multiple fields, use the following format:

GET /posts?_sort=user,views&_order=desc,asc
Slice
Add _start and _end or _limit (an X-Total-Count header is included in the response)

GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
Works exactly as Array.slice (i.e. _start is inclusive and _end exclusive)

Operators
Add _gte or _lte for getting a range

GET /posts?views_gte=10&views_lte=20
Add _ne to exclude a value

GET /posts?id_ne=1
Add _like to filter (RegExp supported)

GET /posts?title_like=server
Full-text search
Add q

GET /posts?q=internet
Relationships
To include children resources, add _embed

GET /posts?_embed=comments
GET /posts/1?_embed=comments
To include parent resource, add _expand

GET /comments?_expand=post
GET /comments/1?_expand=post
To get or create nested resources (by default one level, add custom routes for more)

GET  /posts/1/comments
POST /posts/1/comments
Database
GET /db
Homepage
Returns default index file or serves ./public directory

GET /
*/