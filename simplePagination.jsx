import { useState, useEffect } from 'react'

export default function App() {
	const [page, setPage] = useState(1)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetchData()
	}, [page])

	const handleOnClick = () => {
		setPage(page + 1)
		console.log(page)
		fetchData()
	}

	const fetchData = () => {
		const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				const prevdata = [...posts]
				const newData = prevdata.concat(data)
				setPosts(newData)
			})
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>{post.id}</td>
							<td>{post.title}</td>
							<td>{post.body}</td>
						</tr>
					))}
				</tbody>
			</table>

			<button id="next" onClick={handleOnClick}>
				Next
			</button>
		</>
	)
}
