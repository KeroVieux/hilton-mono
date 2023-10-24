import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
} from "@remix-run/react";
import { ApolloClient, from, gql } from '@apollo/client/core/index.js';
import { HttpLink } from '@apollo/client/link/http/index.js';
import { InMemoryCache } from '@apollo/client/cache/index.js';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries/index.js';

import appStylesHref from "app.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: appStylesHref },
];

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});
try {
	const books = await client.query({
		query: gql`
		query GetBooks {
			books {
				titlex
			}
		}
	`
	})
	console.log('books', books)
} catch(e) {
  console.log('e', JSON.parse(JSON.stringify(e)))
}

export default function App() {
	return (
		<html>
		<head>
			<Meta />
			<Links />
		</head>
		<body>
		<div id="sidebar">
			sidebar
		</div>
		<div id="main">
			<Outlet />
		</div>


		<Scripts />
		<LiveReload />
		</body>
		</html>
	);
}
